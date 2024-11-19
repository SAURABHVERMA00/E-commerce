import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../StateManage/Order/action";
import { updatePaymentInformation } from "../../../StateManage/Payment/action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import { useParams } from "react-router-dom";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const dispatch = useDispatch();
  const { orderId } = useParams();

  const { order } = useSelector((store) => store);



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));

      dispatch(updatePaymentInformation(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-items-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order Get Placed Successfully
        </Alert>
      </div>
      
      <OrderTracker activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20 ">
        {order.order?.orderItems?.map((item) => 
          <Grid
            container
            item
            className="p-5"
            sx={{ alignItems: "center", justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
             }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageURL}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-4">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            </Grid>

            <Grid item>
                <AddressCard address={order.order?.shippingAddress} check={false}/>

            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
