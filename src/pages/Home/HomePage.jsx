import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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

const HomePage = () => {
  return (
    <div className="bg-[#EA2127] pt-36 pb-52">
      {/* Heading Section */}
      <h2 className="text-white lg:ps-20 font-bold mb-8 px-4 lg:px-0 text-4xl lg:text-8xl">
        Future Looks Bright!
      </h2>
      <div className="lg:-mt-12">
        {/* Swiper Carousel for Product Display */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="text-center bg-white p-4 rounded shadow-lg ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <p className="mt-4">{product.name}</p>
                <p className="text-red-500 text-lg font-semibold mt-2">
                  {product.price}
                </p>
                <p className="line-through text-gray-400">{product.oldPrice}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
