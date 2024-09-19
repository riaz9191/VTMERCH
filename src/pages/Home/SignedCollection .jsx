import React from "react";

import sign from "../../assets/img/pat-signature White 1.png";
import book1 from "../../assets/img/img (1).png";
import book2 from "../../assets/img/img (8).png";

const SignedCollection = () => {
  return (
    <section className="bg-black relative py-20">
      <div className="container mx-auto flex flex-col items-center justify-center  lg:flex-row lg:justify-between">
        <div className="lg:w-1/2 px-4 flex flex-col justify-center">
          <div className="lg:ps-20 font-montserrat font-extrabold">
            {" "}
            <h2 className="text-3xl text-white lg:text-4xl font-bold mb-4 ">
              PATRICK BET-DAVID&apos;S <br />
              <span className="text-red-600 text-start lg:text-6xl ">
                SIGNED <br /> COLLECTION
              </span>
              <br />
            </h2>
          </div>
          <div className="lg:ps-20">
            <button className="bg-white text-black py-2 px-6 rounded mt-4 font-black">
              Shop Now &#10095;
            </button>
          </div>
          <div className="lg:ps-20">
            {/* Signature Image */}
            <img
              src={sign}
              alt="Signature"
              className="w-[600px]"
            />
          </div>
        </div>

        {/* Books */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img src={book1} alt="Book 1" className="h-96 " />
          <img src={book2} alt="Book 2" className="h-80 " />
        </div>
      </div>
    </section>
  );
};

export default SignedCollection;
