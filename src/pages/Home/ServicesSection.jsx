import React from 'react';
import { FaShippingFast, FaUndoAlt, FaHeadset, FaMoneyBillAlt } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] py-12 p-10 lg:px-20">
     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 text-white text-center lg:text-left">
  <div className="flex flex-col items-center lg:items-start">
    <FaShippingFast size={40} className="mb-4" />
    <h3 className="text-xl font-bold mb-2">Shipping</h3>
    <p className="text-sm">
      The attention to detail is evident in every aspect of this backpack.
    </p>
  </div>

  <div className="flex flex-col items-center lg:items-start">
    <FaUndoAlt size={40} className="mb-4" />
    <h3 className="text-xl font-bold mb-2">Return</h3>
    <p className="text-sm">
      The attention to detail is evident in every aspect of this backpack.
    </p>
  </div>

  <div className="flex flex-col items-center lg:items-start">
    <FaHeadset size={40} className="mb-4" />
    <h3 className="text-xl font-bold mb-2">Support</h3>
    <p className="text-sm">
      The attention to detail is evident in every aspect of this backpack.
    </p>
  </div>

  <div className="flex flex-col items-center lg:items-start">
    <FaMoneyBillAlt size={40} className="mb-4" />
    <h3 className="text-xl font-bold mb-2">Payment</h3>
    <p className="text-sm">
      The attention to detail is evident in every aspect of this backpack.
    </p>
  </div>
</div>

    </div>
  );
};

export default ServicesSection;
