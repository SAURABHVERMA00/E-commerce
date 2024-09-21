import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className="shadow-sm shadow-black p-5 hover:shadow-2xl border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://assets.ajio.com/medias/sys_master/root/20230728/GBrh/64c3db50a9b42d15c979555c/-473Wx593H-466398360-green-MODEL.jpg"
              alt=""
            />
            <div className="  ml-5 space-y-2">
              <p className="">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1899</p>
        </Grid>

        <Grid item xs={4}>
          {true && 
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">
                Your Item has been delivered successfully
              </p>
            </div>
          }
          {false &&             <p>
              <span>Expected Delivery on March 03</span>
            </p>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
