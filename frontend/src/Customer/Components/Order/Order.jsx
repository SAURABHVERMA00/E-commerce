import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlacedOrder } from "../../../StateManage/Order/action";

const orderStatus = [
  { label: "On the Way", value: "on-the-way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Refunded", value: "refunded" },
];

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    // dispatch(getOrderById(orderId))
    dispatch(getAllPlacedOrder());
  }, [dispatch]);

  useEffect(() => {
    const d = order.orders.map((order) => order.orderItems);
    setData(d);
  }, [order.orders]);
  // useEffect(() => {
  //   if (data.length > 0) {
  //     data.forEach(orderItems => {
  //       orderItems.forEach(item => {
  //         console.log("Product Details", item.product);
  //       });
  //     });
  //   }
  // }, [data]);
  console.log("Order Data", data);

  return (
    <div className=" px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-betweenp[" }}>
        <Grid item xs={2.5}>
          <div className=" h-auto shadow bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultValue={option.value}
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {data.map((item) =>item.map((item)=> (
              <OrderCard key={item._id} item={item} />
            )))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
