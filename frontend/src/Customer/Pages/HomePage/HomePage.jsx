import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/MensKurta";
import Footer from "../../Components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel sectionName={"Men's Kurta"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Men's Shoes"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Men's Shirt"} data={mens_kurta}  />
        <HomeSectionCarousel sectionName={"Women's Saree"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Women's Dress  "} data={mens_kurta} />
        <HomeSectionCarousel sectionName data={mens_kurta} />
      </div>
     
      
    
    </div>
  );
};

export default HomePage;
