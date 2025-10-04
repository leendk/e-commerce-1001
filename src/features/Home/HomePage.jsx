import React from "react";
import HeroSection from "./HomePages/HeroSection/HeroSection";
import FlashSalesSection from "./HomePages/FlashSales/FlashSalesSection.jsx";
import CategoriesSection from "./HomePages/Categories/CategoriesSection.jsx";
import BestSellingSection from "./HomePages/BestSelling/BestSellingSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlashSalesSection />
      <CategoriesSection />
      <BestSellingSection />
    </>
  );
};

export default HomePage;
