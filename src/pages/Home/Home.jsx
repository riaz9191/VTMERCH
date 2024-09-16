import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomePage from "./HomePage";
import HomePageTwo from "./HomePageTwo";

// Sample product data
const products = [
  {
    name: "Army Green Active Short Sleeve",
    image: "link-to-image-1", // Replace with actual image URL
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: "link-to-image-2", // Replace with actual image URL
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: "link-to-image-3", // Replace with actual image URL
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: "link-to-image-4", // Replace with actual image URL
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: "link-to-image-5", // Replace with actual image URL
    price: "$34.95",
    oldPrice: "$34.95",
  },
];

const Home = () => {
  return (
    <div>
      <HomePage/>
      <HomePageTwo/>
    </div>
  );
};

export default Home;
