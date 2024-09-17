import React from 'react';
import man from "../../assets/img/img (5).png";

const MissionSection = () => {
  return (
    <section className="relative bg-red-600 text-white py-20 ps-20">
      <div className=" text- px-4 lg:w-7/12 ">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          OUR MISSION IS TO ENLIGHTEN, ENTERTAIN, <br />
          AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
        </h2>
      </div>

      {/* Overlapping Image */}
      <div className="absolute bottom-0 transform right-32 hidden lg:block">
        <img
          src={man}
          alt="Mission"
          className="h-96 object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
 