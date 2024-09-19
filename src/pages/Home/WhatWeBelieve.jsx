import React from "react";
import img1 from "../../assets/img/img (10).png";
import img2 from "../../assets/img/img (3).png";
import { div } from "framer-motion/client";

const WhatWeBelieve = () => {
  return (
    <div>
      <div className="moble block lg:hidden">
        <div className="relative bg-gradient-to-r from-[#3B3B3B] to-black text-white py-16 lg:py-24 px-4 lg:px-32">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
              <img
                src={img1}
                alt="What We Believe"
                className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] object-cover rounded-lg"
              />
            </div>

            {/* Right Section*/}
            <div className="w-full lg:w-1/2 relative lg:pl-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 uppercase font-actOfRejection text-center">
                What We Believe
              </h2>

              <div className="space-y-8 lg:space-y-10 text-center">
                <div>
                  <p className="text-gray-300">
                    <span className="text-2xl font-bold">Leadership</span> is
                    vital from the top of corporations to the military to small
                    businesses to parents to students. We all can be leaders.
                  </p>
                </div>
                <hr className="border-gray-500" />

                <div>
                  <p className="text-gray-300">
                    <span className="text-2xl font-bold">Entrepreneurs</span>{" "}
                    are heroes who should be respected and celebrated for taking
                    risks, launching products, creating jobs, and building
                    companies.
                  </p>
                </div>
                <hr className="border-gray-500" />

                <div>
                  <p className="text-gray-300">
                    <span className="text-2xl font-bold">Capitalism</span> is a
                    critically important economic system that has advanced
                    society and the quality of life we enjoy today.
                  </p>
                </div>
                <hr className="border-gray-500" />

                <div>
                  <p className="text-gray-300">
                    <span className="text-2xl font-bold">Debate</span> is
                    welcome and necessary as it can lead to consensus,
                    epiphanies, and expose the truth. When a clash of ideas,
                    often emotionally charged, evolves into civil debate and
                    objective processing of issues, everyone wins. Free speech
                    is critical to productive debate.
                  </p>
                </div>
              </div>

              {/* Rightside Image */}
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  src={img2}
                  className="w-[200px] lg:w-[300px] object-cover"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dex hidden lg:block">
        <div className="relative bg-gradient-to-r from-[#3B3B3B] to-black text-white py-26 p-32">
          <div className="container mx-auto flex justify-center flex-col lg:flex-row items-center px-4 lg:px-0  ">
            <div className="bg- rounded-lg w-full lg:w-1/2">
              <img
                src={img1}
                alt="What We Believe"
                className="w-[550px] h-[550px] object-cover rounded-lg "
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-5xl lg:text-8xl font- mb-10 lg:mb-20 absolute top-28   transform left-[480px] uppercase font-actOfRejection">
                What We Believe
              </h2>

              <div className="space-y-10 lg:pt-16 ">
                <div>
                  <p className="mt-6 text-gray-300">
                    <span className="text-2xl font-bold">Leadership</span> is
                    vital from the top of corporations to the military to small{" "}
                    <br /> businesses to parents to students. We all can be
                    leaders.
                  </p>
                </div>
                <hr />
                <div>
                  <p className="mt-2 text-gray-300">
                    <span className="text-2xl font-bold">Entrepreneurs</span>{" "}
                    are heroes who should be respected and celebrated for <br />{" "}
                    taking risks, launching products, creating jobs, and
                    building companies.
                  </p>
                </div>
                <hr />
                <div>
                  <p className="mt-2 text-gray-300">
                    <span className="text-2xl font-bold">Capitalism</span> is a
                    critically important economic system that has advanced
                    society and the quality of life we enjoy today.
                  </p>
                </div>
                <hr />
                <div>
                  <p className="mt-2 text-gray-300">
                    <span className="text-2xl font-bold">Debate</span> is
                    welcome and necessary as it can lead to consensus,
                    epiphanies, and expose the truth. When a clash of ideas,
                    often emotionally charged, evolves into civil debate and
                    objective processing of issues, everyone wins. Free speech
                    is critical to productive debate.
                  </p>
                </div>
                <div>
                  <img
                    src={img2}
                    className=" absolute bottom-0 transform right-0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default WhatWeBelieve;
