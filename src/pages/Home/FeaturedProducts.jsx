import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/img/img (4).jpeg';
import img2 from '../../assets/img/img (6).jpeg';
import img3 from '../../assets/img/img (7).jpeg';
import img4 from '../../assets/img/img (10).jpeg';

const products = [
  {
    id: 1,
    name: 'Army Green Active Short Sleeve',
    image: img1,
    price: 34.95,
    originalPrice: 34.95,
  },
  {
    id: 2,
    name: 'Army Green Active Short Sleeve',
    image: img2,
    price: 34.95,
    originalPrice: 34.95,
  },
  {
    id: 3,
    name: 'Army Green Active Short Sleeve',
    image: img3,
    price: 34.95,
    originalPrice: 34.95,
  },
  {
    id: 4,
    name: 'Army Green Active Short Sleeve',
    image: img4,
    price: 34.95,
    originalPrice: 34.95,
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-16">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold mb-2 font-montserrat text-center lg:text-start">
          BUY 1 GET 1 FREE
        </h2>
        <p className="text-xl sm:text-xl lg:text-5xl font-bold font-montserrat text-center lg:text-start">
          ON{' '}
          <span className="font-inter text-outline">BEST SELLING PRODUCTS</span>
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4"
            variants={cardVariants} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-sm sm:text-md lg:text-lg font-semibold mb-2">
              {product.name}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-500 line-through text-sm sm:text-md">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;
