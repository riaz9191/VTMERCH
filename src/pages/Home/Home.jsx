import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomePage from "./HomePage";
import FeaturedProducts from "./FeaturedProducts";
import SignedCollection from "./SignedCollection ";


const Home = () => {
  return (
    <div>
      <HomePage/>
      <FeaturedProducts/>
      <SignedCollection/>
      
    </div>
  );
};

export default Home;
