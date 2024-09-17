import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomePage from "./HomePage";
import FeaturedProducts from "./FeaturedProducts";



const Home = () => {
  return (
    <div>
      <HomePage/>
      <FeaturedProducts/>
     
    </div>
  );
};

export default Home;
