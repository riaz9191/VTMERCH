import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/img/img (9).png";
import img2 from "../../assets/img/img (10).png";
import img3 from "../../assets/img/img (11).jpeg";
import img4 from "../../assets/img/img (11).PNG";
import img5 from "../../assets/img/img (11).jpeg";

const products = [
  {
    name: "Army Green Active Short Sleeve",
    image: img1,
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: img2,
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: img3,
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: img4,
    price: "$34.95",
    oldPrice: "$34.95",
  },
  {
    name: "Army Green Active Short Sleeve",
    image: img5,
    price: "$34.95",
    oldPrice: "$34.95",
  },
];

const HomePage = () => {
  return (
    <div className="bg-[#EA2127] pt-36 pb-32">
      <h2 className="text-white lg:ps-20 font-bold mb-8 px-4 lg:px-0 text-4xl lg:text-8xl font-actOfRejection uppercase opacity-50">
        Future Looks Bright!
      </h2>
      <div className="lg:-mt-16 ps-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
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
              <div className="rounded text-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <p className="mt-4">{product.name}</p>
                <div className="flex flex-row gap-3 items-center mt-2">
                  {" "}
                  <p className=" text-lg font-semibold mt-">{product.price}</p>
                  <p className="line-through ">{product.oldPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
