import React from 'react';
import img1 from '../../assets/img/img (10).png'


const WhatWeBelieve = () => {
  return (
    <div className="bg-gradient-to-r from-[#3B3B3B] to-black text-white py-20 p-32">
      {/* Main Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 gap-10">
        {/* Left Side - Image */}
        <div className="bg-white rounded-lg w-full lg:w-1/4 lg:ms-32">
          <img
            src={img1}
            alt="What We Believe"
            className="w-[700px] h-96 object-cover rounded-lg "
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl lg:text-7xl font-bold mb-10 lg:mb-20">
            What We Believe
          </h2>

          {/* Belief Items */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold">Leadership</h3>
              <p className="mt-2 text-gray-300">
                Leadership is vital from the top of corporations to the military
                to small businesses to parents to students. We all can be
                leaders.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Entrepreneurs</h3>
              <p className="mt-2 text-gray-300">
                Entrepreneurs are heroes who should be respected and celebrated
                for taking risks, launching products, creating jobs, and
                building companies.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Capitalism</h3>
              <p className="mt-2 text-gray-300">
                Capitalism is a critically important economic system that has
                advanced society and the quality of life we enjoy today.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Debate</h3>
              <p className="mt-2 text-gray-300">
                Debate is welcome and necessary as it can lead to consensus,
                epiphanies, and expose the truth. When a clash of ideas, often
                emotionally charged, evolves into civil debate and objective
                processing of issues, everyone wins. Free speech is critical to
                productive debate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
