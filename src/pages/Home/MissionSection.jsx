import React from "react";
import man from "../../assets/img/img (5).png";
import quotes from "../../assets/Icon/quotes.svg";

const MissionSection = () => {
  return (
    <section className="relative bg-red-600 text-white py-14 sm:py-20 lg:py-28 px-4 lg:ps-20">

      {/* Quotes Image */}
      <img className="absolute top-0 left-10 w-44 h-52" src={quotes} alt="" />

      <div className="lg:w-7/12">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 font-montserrat leading-tight">
          OUR MISSION IS TO ENLIGHTEN, ENTERTAIN, <br />
          AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
        </h2>
      </div>

      {/* Image on larger screens */}
      <div className="absolute bottom-0 right-0 lg:right-44 hidden lg:block">
        <img
          src={man}
          alt="Mission"
          className="h-64 sm:h-80 lg:h-[450px] object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
