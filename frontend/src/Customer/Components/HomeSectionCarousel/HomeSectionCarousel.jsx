import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarousel = ({data , sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a reference for the carousel

  const itemsToShow = 5.5;
  const maxIndex = 10 - itemsToShow;

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: itemsToShow },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Use AliceCarousel's built-in slidePrev method
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Use AliceCarousel's built-in slideNext method
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2  className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          ref={carouselRef} // Reference to AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Custom right button */}
        {activeIndex < maxIndex && (
          <Button
            variant="contained"
            onClick={slideNext}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%)  rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}

        {/* Custom left button */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(-90deg)",
            }}
            color="white"
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
