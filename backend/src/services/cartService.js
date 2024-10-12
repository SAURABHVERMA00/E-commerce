const CartItems = require("../models/cartItems.model.js");
const Cart = require("../models/cartModel.model.js");
const Product = require("../models/product.model.js");

async function createCart(userId) {
  try {
    const cart = new Cart({
      userId,
    });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    const cart = await Cart.findOne({ userId });

    const cartItems = await CartItems.find({ cart: cart._id }).populate(
      "product"
    );
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrices = totalPrice;
    cart.totalDiscountedPrice = totalPrice - totalDiscountedPrice;
    cart.totalItems = totalItem;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    const isPresent = await CartItems.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });
    
    if (!isPresent) {
      const cartItem = new CartItems({
        cart: cart._id,
        product: product._id,
        size: req.size,
        quantity: 1,
        price: product.price,
        discountedPrice: product.discountedPrice,
        userId,
      });

      const createCartItem = await cartItem.save();
      cart.cartItems.push(createCartItem);

      await cart.save();
      return "Item added to Cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { createCart, findUserCart };
