import React from "react";
import img1 from '../../assets/img/img (1).jpeg'
import img2 from '../../assets/img/img (5).jpeg'


const FutureSection = () => {
  const products = [
    {
      name: "FLB Shirt - Purple",
      image: img1,
      price: "$34.95",
      priceOld: "$44.95",
    },
    {
      name: "FLB Shirt - Purple",
      image: img2,
      price: "$29.99",
      priceOld: "$.95",
    },
  ];
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-10 lg:px-20">
        {/* Main container with two columns */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
          {/* Left Side - Text Section */}
          <div className="text-black lg:w-1/2 text-center lg:text-left ">
            <h1 className="text-5xl lg:text-8xl font-bold leading-tight mb-4">
              Future <br /> Looks <br /> Bright
            </h1>
            <p className="text-5xl">PURPLE & <br /> GOLD SERIES</p>
          </div>

          {/* Right Side - Product Cards */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row items-center justify-around mt-10 lg:mt-0 space-y-6 lg:space-y-0 lg:space-x-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg w-full lg:w-1/2 text-"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[700px] h-96 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex flex-row gap-3">
                <p className="text-red-600 font-bold text-lg mt-2">
                  {product.price}
                </p>
                <p className="text-[#9B9B9B] font-bold text-lg mt-2 line-through">
                  {product.price}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
