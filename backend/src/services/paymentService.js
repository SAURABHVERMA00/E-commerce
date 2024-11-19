const razorpay = require("../config/razorpayClient");
const orderService = require("../services/orderService");

const createPaymentLink = async (orderId) => {
  try {
    const order = await orderService.findOrderById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    const paymentLinkRequest = {
      amount: order.discount   * 100,
      currency: "INR",
      customer: {
        name: order.user.firstName + " " + order.user.lastName,
        contact: order.user.mobile,
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:3000/payment/${orderId}`,
      callback_method: "get",
    };

    const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

    const paymentLinkId = paymentLink.id;
    const paymentLinkUrl = paymentLink.short_url;

    const resData={
        paymentLinkId,
        paymentLinkUrl
    }
    return resData;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);    
  }
};


const updatePaymentInformation=async (reqData)=>{
    const paymentId=await reqData.payment_id;
    const orderId=await reqData.order_id;

    try{
        const order=await orderService.findOrderById(orderId);

        const payment=await razorpay.payments.fetch(paymentId);
         
       if(payment.status=="captured"){
        order.paymentDetails.paymentId=paymentId;
        order.paymentDetails.paymentStatus="COMPLETED";
        order.paymentDetails.transactionId=payment.order_id;
        order.orderStatus="PLACED";

        await order.save();
       } 

       const   resData={
        message:"Your Order has been placed successfully",
        success:true
       }
    }
    catch{
        console.log(err);
        throw new Error(err.message);
    }
}

module.exports = {
  createPaymentLink,
  updatePaymentInformation
};
