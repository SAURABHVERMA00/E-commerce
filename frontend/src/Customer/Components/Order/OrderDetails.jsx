import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[8rem] object-cover object-top"
                  src="https://ivalinmabia.com/cdn/shop/files/azhagi-blue-cotton-saree-sarees-975.webp?v=1725378848&width=1780"
                  alt=""
                />

                <div className="space-y-2 ml-5  ">
                  <p className="font-semibold"> Women Rise Pink Saree</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    {" "}
                    <span>Color:Pink</span> <span>Size:M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹1899</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: "#7d2fd0", cursor: "pointer" }}>
                <StarOutlineIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
