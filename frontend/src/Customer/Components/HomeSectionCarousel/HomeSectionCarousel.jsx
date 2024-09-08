import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Button} from '@mui/material'
const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

const HomeSectionCarousel = () => {
    const items=[1,1,1,1,1].map((item)=>
        <HomeSectionCard/>
    )
  return (
    <div className=" px-4 lg:px-8 border border-black">
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls 
        />
        <Button variant="contained" className="z-50" sx={{position:"absolute" ,top:"8rem",right:"0rem", transform:"translateX(50%)  rotate(90deg)"}} color="white"  aria-label="next">
            <KeyboardArrowLeftIcon  sx={{transform:"rotate( 90deg)"}}/>
        </Button>

        <Button variant="contained" className="z-50" sx={{position:"absolute" ,top:"8rem",left:"0rem", transform:"translateX(50%)  rotate(-90deg)"}} color="white"  aria-label="next">
            <KeyboardArrowLeftIcon  sx={{transform:"rotate(90deg)"}}/>
        </Button>
      </div>
     
    </div>
  );
};

export default HomeSectionCarousel;
