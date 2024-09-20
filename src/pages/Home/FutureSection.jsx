import React from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/img/img (1).jpeg';
import img2 from '../../assets/img/img (5).jpeg';

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
      priceOld: "$39.95",
    },
  ];

  // Define animation variants for the sections
  const leftSectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.8 } },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.8, delay: 0.2 } },
  };

  return (
    <div className="w-full overflow-hidden"> 
      <div className="flex items-center justify-center py-10 lg:px-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
          
          {/* Left Section Animation */}
          <motion.div
            className="text-black w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftSectionVariants}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight mb-4 font-actOfRejection opacity-80">
              Future <br /> Looks <br /> Bright
            </h1>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-montserratItalic">
              <span className="text-[#7F1BCD] font-bold">PURPLE</span>{" "}
              <span className="text-outline font-montserrat">&</span>
              <br />
              <span className="text-[#E0A408] font-bold">Gold</span>{" "}
              <span className="text-outline font-montserrat">Series</span>
            </p>
          </motion.div>

          {/* Right Section Animation */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-around mt-10 lg:mt-0 space-y-6 lg:space-y-0 lg:space-x-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightSectionVariants}
          >
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg w-full lg:w-1/2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex flex-row gap-3">
                  <p className="text-red-600 font-bold text-lg mt-2">
                    {product.price}
                  </p>
                  <p className="text-[#9B9B9B] font-bold text-lg mt-2 line-through">
                    {product.priceOld}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FutureSection;
