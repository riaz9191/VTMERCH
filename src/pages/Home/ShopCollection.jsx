import React from 'react';

// Import local images
import bossCollection from '../../assets/img/img (3).jpeg';
import headwear from '../../assets/img/img (7).png';
import valueBooks from '../../assets/img/img (5).jpeg';
import accessories from '../../assets/img/img (8).jpeg';
import futureBrightCollection from '../../assets/img/img (2).jpeg';
import tops from '../../assets/img/img (9).jpeg';

const ShopCollection = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C2A2A] to-[#000000] text-white py-24 p-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold font-montserrat">SHOP</h1>
            <h2 className="text-6xl font-light text-gray-400 font-montserrat text-outline2">COLLECTION</h2>
            <button className="mt-6 px-6 py-3 border bg-white border-gray-400 text-black hover:bg-gray-700 rounded-md">
              VIEW ALL →
            </button>
          </div>
          <div className="relative pt-[92px]">
            <img
              src={bossCollection}
              alt="The Boss Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">THE BOSS COLLECTION</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-36 ">
          <div className="relative">
            <img
              src={headwear}
              alt="Headwear"
              className="w-full h-[200px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">HEADWEAR</h3>
            </div>
          </div>

          <div className="relative">
            <img
              src={valueBooks}
              alt="Value Books"
              className="w-full h-[225px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">VALUE BOOKS</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="relative pt-14">
            <img
              src={accessories}
              alt="Accessories"
              className="w-full h-[540px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">ACCESSORIES</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <img
              src={futureBrightCollection}
              alt="The Future Looks Bright Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">THE FUTURE LOOKS BRIGHT COLLECTION</h3>
            </div>
          </div>

          <div className="relative">
            <img
              src={tops}
              alt="Tops"
              className="w-full h-[276px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 rounded-b-md">
              <h3 className="text-xl font-bold">TOPS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
