import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import sign from "../../assets/img/pat-signature White 1.png";
import book1 from "../../assets/img/img (1).png";
import book2 from "../../assets/img/img (8).png";

const SignedCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <section ref={ref} className="bg-black relative py-10 sm:py-16 lg:py-20 lg:px-16 overflow-hidden">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section*/}
        <div className="lg:w-1/2 px-4 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            className="font-montserrat font-extrabold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl text-white lg:text-4xl font-bold mb-4">
              PATRICK BET-DAVID&apos;S <br />
              <span className="text-red-600 lg:text-6xl">SIGNED <br /> COLLECTION</span>
              <br />
            </h2>
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black uppercase font-semibold py-2 px-6 rounded mt-4"
            >
              Shop Now &#10095;
            </motion.button>
          </motion.div>

          {/* Signature Image */}
          <motion.div
            className="mt-6 lg:mt-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={sign} alt="Signature" className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] mx-auto lg:mx-0" />
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center gap-4 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={book1}
            alt="Book 1"
            className="h-64 sm:h-80 lg:h-96 object-contain"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={book2}
            alt="Book 2"
            className="h-60 sm:h-72 lg:h-80 object-contain"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SignedCollection;
