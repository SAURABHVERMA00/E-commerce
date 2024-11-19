const cartService = require("../services/cartService");
const Address = require("../models/address.model");
const Order = require("../models/order.model");
const OrderItems = require("../models/OrderItems.model");

async function createOrder(user, shippingAddress) {
  let address;

  if (shippingAddress._id) {
    const existAdd = await Address.findById(shippingAddress._id);

    address = existAdd;
  } else {
    address = new Address(shippingAddress);
    address.user = user;
    await address.save();

    user.address.push(address._id);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);

  let orderItems = [];

  for (let item of cart.cartItems) {
    let orderItem = new OrderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();

    orderItems.push(createdOrderItem._id);
  }

  const createdOrder = new Order({
    user: user._id,
    orderItems: orderItems,
    shippingAddress: address._id,
    totalPrice: cart.totalPrices,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItems: cart.totalItems,
  });

  const savedOrder = await createdOrder.save();

  // return savedOrder.populate("orderItems").populate("shippingAddress").execPopulate();

    // Populate references for the response
    const populatedOrder = await Order.findById(savedOrder._id)
    .populate('orderItems')
    .populate('shippingAddress')
    .populate('user');

  return populatedOrder;
}

async function placedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.paymentStatus = "COMPLETED";

  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";
  return await order.save();
}

async function shippedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";
  return await order.save();
}
async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";
  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getAllOrder() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await Order.findOrderById(orderId);

  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placedOrder,
  confirmedOrder,
  shippedOrder,
  deliverOrder,
  cancelOrder,
  findOrderById,
  userOrderHistory,
  getAllOrder,
  deleteOrder,
};
