const CartItems = require("../models/cartItems.model");
const userService = require("../services/userService");

async function updateCartItem(userId, cartItemId, cartItemData) {
  // console.log("updateCartItem", userId, cartItemId, cartItemData);
  try {
    const item = await findCartItemById(cartItemId);
    
    if (item.userId.toString() !== userId.toString()) {
      throw new Error("You are not authorized to update this item", cartItemId);
    }
    const user = await userService.findUserById(userId);
    if (!user) {
      throw new Error("User not found", userId);
    }
    
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You are not authorized to update this item", cartItemId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  try {

    const cartItem = await findCartItemById(cartItemId);
  
    if (cartItem.userId.toString() !== userId.toString()) {
      throw new Error("You are not authorized to update this item", cartItemId);
    }
    const user = await userService.findUserById(userId);
   
    if (!user) {
      throw new Error("User not found", userId);
    }

    if (user._id.toString() === cartItem.userId.toString()) {
      const deletedCartItem = await CartItems.findByIdAndDelete(cartItemId);
      return deletedCartItem;
    } else {
      throw new Error("You are not authorized to update this item", cartItemId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
  
}

async function findCartItemById(cartItemId) {
  try {
   
    const cartItem = await CartItems.findById(cartItemId).populate("product");
   
    if(!cartItem){
      throw new Error("Cart item not found", cartItemId);
    }
    return cartItem;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
