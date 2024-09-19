import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/img/img (4).jpeg'
import img2 from '../../assets/img/img (6).jpeg'
import img3 from '../../assets/img/img (7).jpeg'
import img4 from '../../assets/img/img (10).jpeg'

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

const NewArrival = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto  mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold mb-2 font-montserrat text-center">NEW ARRIVAL</h2>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
