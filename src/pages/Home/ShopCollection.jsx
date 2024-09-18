import React from 'react';

const ShopCollection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">SHOP</h1>
            <h2 className="text-4xl font-light text-gray-400">COLLECTION</h2>
            <button className="mt-6 px-6 py-3 border border-gray-400 text-white hover:bg-gray-700 rounded-md">
              VIEW ALL →
            </button>
          </div>
          <div className="relative pt-24">
            <img
              src="https://via.placeholder.com/300x400"
              alt="The Boss Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">THE BOSS COLLECTION</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-36 ">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Headwear"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">HEADWEAR</h3>
            </div>
          </div>

          <div className="relative ">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Value Books"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">VALUE BOOKS</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="relative pt-14">
            <img
              src="https://via.placeholder.com/300x500"
              alt="Accessories"
              className="w-full h-[600px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">ACCESSORIES</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x300"
              alt="The Future Looks Bright Collection"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">THE FUTURE LOOKS BRIGHT COLLECTION</h3>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Tops"
              className="w-full h-[340px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">TOPS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
