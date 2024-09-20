import React from 'react';
import { motion } from 'framer-motion';

import bossCollection from '../../assets/img/img (3).jpeg';
import headwear from '../../assets/img/img (7).png';
import valueBooks from '../../assets/img/img (5).jpeg';
import accessories from '../../assets/img/img (8).jpeg';
import futureBrightCollection from '../../assets/img/img (2).jpeg';
import tops from '../../assets/img/img (9).jpeg';

import logo from "../../assets/Logo/logo_white.png";

const randomBounceEffect = (delay) => ({
  hidden: { opacity: 0, y: 50 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay, 
    },
  },
});

const ShopCollection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#2C2A2A] to-[#000000] text-white py-16 sm:py-24 px-4 lg:px-10">

       {/* logo Image */}
       <img className="absolute -top-20 -left-24 lg:w-[700px] lg:h-[800px] opacity-5" src={logo} alt="" />
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {/* Left Section*/}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold font-montserrat">SHOP</h1>
            <h2 className="text-5xl sm:text-6xl font-light text-gray-400 font-montserrat text-outline2">
              COLLECTION
            </h2>
            <button className="mt-6 px-6 py-3 border bg-white border-gray-400 text-black hover:bg-gray-700 rounded-md">
              VIEW ALL →
            </button>
          </div>
          <motion.div
            className="relative pt-10 sm:pt-[92px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={randomBounceEffect(0.1)}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={bossCollection}
              alt="The Boss Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">THE BOSS COLLECTION</h3>
            </div>
          </motion.div>
        </div>

        {/* Middle Section*/}
        <div className="space-y-6 pt-12 lg:pt-36">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={randomBounceEffect(0.2)} 
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={headwear}
              alt="Headwear"
              className="w-full h-40 sm:h-[200px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">HEADWEAR</h3>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={randomBounceEffect(0.3)}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={valueBooks}
              alt="Value Books"
              className="w-full h-48 sm:h-[225px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">VALUE BOOKS</h3>
            </div>
          </motion.div>
        </div>

        {/* Accessories Section */}
        <motion.div
          className="relative pt-10 lg:pt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={randomBounceEffect(0.4)}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={accessories}
            alt="Accessories"
            className="w-full h-[360px] sm:h-[540px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
            <h3 className="text-xl font-bold">ACCESSORIES</h3>
          </div>
        </motion.div>

        {/* Right Section*/}
        <div className="space-y-6">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={randomBounceEffect(0.5)}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={futureBrightCollection}
              alt="The Future Looks Bright Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">THE FUTURE LOOKS BRIGHT COLLECTION</h3>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={randomBounceEffect(0.6)}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={tops}
              alt="Tops"
              className="w-full h-[200px] sm:h-[276px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">TOPS</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
