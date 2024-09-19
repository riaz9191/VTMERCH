import React, { useState } from "react";
import img1 from "../../assets/img/img (3).jpeg";
import img2 from "../../assets/img/img (6).png";
import img3 from "../../assets/img/img (4).png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ProductOfTheMonth = () => {
  const [mainImage, setMainImage] = useState(img1);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 font-montserrat">
        PRODUCT OF <span className="text-gray-400 text-outline">THE MONTH</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex items-start">
          <div className="flex flex-col items-center mr-4">
            <img
              src={img1}
              alt="Thumbnail 1"
              onClick={() => handleImageClick(img1)}
              className="w-16 h-16 object-cover mb-4 cursor-pointer border-2 rounded-lg"
            />
            <img
              src={img2}
              alt="Thumbnail 2"
              onClick={() => handleImageClick(img2)}
              className="w-16 h-16 object-cover mb-4 cursor-pointer border-2 rounded-lg"
            />
            <img
              src={img3}
              alt="Thumbnail 3"
              onClick={() => handleImageClick(img3)}
              className="w-16 h-16 object-cover mb-4 cursor-pointer border-2 rounded-lg"
            />
            <img
              src={img2}
              alt="Thumbnail 4"
              onClick={() => handleImageClick(img2)}
              className="w-16 h-16 object-cover cursor-pointer border-2 rounded-lg   "
            />
          </div>

          {/* Main product image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt="Product"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4">
            Premium Valuetainment Leather Backpack
          </h2>
          <p className="text-gray-500 mb-4">
            The attention to detail is evident in every aspect of this backpack.
            From the sturdy hardware and reinforced stitching to the smooth
            zippers and luxurious lining, no detail has been overlooked.
          </p>

          <div className="text-2xl font-bold text-red-600 mb-4">
            <span className="text-black font-montserrat">Price:</span> $199.95
          </div>

          <div className="mb-4">
            <span className="font-bold">Size:</span>
            <div className="flex space-x-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <span className="font-bold">Quantity:</span>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                className="w-12 text-center border-t border-b border-gray-300"
                value={quantity}
                readOnly
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <button className="lg:px-16 p-4 py-3 bg-white text-black border border-gray-900 hover:bg-black hover:text-white rounded-md ">
              ADD TO CART
            </button>
            <button className="lg:px-16 p-4 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              BUY IT NOW
            </button>
          </div>
          <div className="flex space-x-4 mb-6 text-black">
            <span className="font-bold">Share:</span>
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>

          <a href="#" className="text-gray-500 underline">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductOfTheMonth;
