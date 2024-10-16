const cartService = require("../services/cartService");
const Address = require("../models/address.model");
const Order = require("../models/order.model");

async function createOrder(user, shippingAddress) {
  let address;
  if (shippingAddress._id) {
    const existAdd = await Address.findById(shippingAddress._id);

    address = existAdd;
  } else {
    address = new Address(shippingAddress);
    address.user = user;
    await address.save();

    user.addresses.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (let item of cart.cartItems) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  const createdOrder = new Order({
    user: user,
    orderItems: orderItems,
    shippingAddress: address,
    totalPrice: cart.totalPrices,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItems: cart.totalItems,
  });

  const savedOrder = await createdOrder.save();

  return savedOrder;
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
