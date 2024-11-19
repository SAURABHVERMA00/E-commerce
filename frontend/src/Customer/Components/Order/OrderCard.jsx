import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = ({item}) => {
  // console.log('item',item.map((item)=>item.product.title));
  const navigate=useNavigate();
  
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="shadow-sm shadow-black p-5 hover:shadow-2xl border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item.product?.imageURL}
              alt={item.product?.title}
            />
            <div className="  ml-5 space-y-2">
              <p className="">{item.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">Size: {item.size}</p>
              <p className="opacity-50 text-xs font-semibold">Color: {item.product?.color}</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item.discountedPrice}  </p>
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
