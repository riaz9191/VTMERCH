import React from 'react';
import man from "../../assets/img/img (5).png";

const MissionSection = () => {
  return (
    <section className="relative bg-red-600 text-white py-28 ps-20">
      <div className="px-4 lg:w-7/12 ">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat">
          OUR MISSION IS TO ENLIGHTEN, ENTERTAIN, <br />
          AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
        </h2>
      </div>
      <div className="absolute bottom-0 transform right-44 hidden lg:block">
        <img
          src={man}
          alt="Mission"
          className="h-[450px] object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
 