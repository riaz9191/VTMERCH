import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <div className="">
        {isLoading ? (
          // Beautiful loader with animation
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="max-w-8xl mx-auto">
            <Navbar />
            <div className="">
              <Outlet />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
