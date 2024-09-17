import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomePage from "./HomePage";
import FeaturedProducts from "./FeaturedProducts";
import SignedCollection from "./SignedCollection ";
import MissionSection from "./MissionSection";
import ShopCollection from "./ShopCollection";
import NewArrival from "./NewArrival";
import FutureSection from "./FutureSection";
import WhatWeBelieve from "./WhatWeBelieve";
import ProductOfTheMonth from "./ProductOfTheMonth";



const Home = () => {
  return (
    <div>
      <HomePage/>
      <FeaturedProducts/>
      <SignedCollection/>
      <MissionSection/>
      <ShopCollection/>
      <NewArrival/>
      <FutureSection/>
      <WhatWeBelieve/>
      <ProductOfTheMonth/>
    </div>
  );
};

export default Home;
