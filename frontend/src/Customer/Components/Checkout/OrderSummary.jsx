import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../StateManage/Order/action";
import { createPayment } from "../../../StateManage/Payment/action";


const OrderSummary = () => {
  const {order}=useSelector(state=>state);
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get('order_id');
  
  
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  

  const handleCheckout=()=>{
  
    dispatch(createPayment(orderId))
  }

  return (
    <div className="space-y-3">
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress}  check={false}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
              <CartItem  item={item}/>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-3">
              <p className="uppercase font-bold opacity-60  pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{ order.order?.totalDiscountedPrice}</span>
                </div>
                <div className="flex justify-between pt-3  ">
                  <span>Delivery Charge </span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600 ">₹{order.order?.discount} </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained "
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
