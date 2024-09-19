import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import logoImg from "../../../assets/Logo/footer_logo.png";
import visa from "../../../assets/Icon/visa 1.svg";
import PayPal from "../../../assets/Icon/paypal 1.svg";
import AmericanExpress from "../../../assets/Icon/american-express (1) 1.svg";
import ApplePay from "../../../assets/Icon/apple-pay 1.svg";
import Visa2 from "../../../assets/Icon/visa 2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 fontmon">
      <div className="mb-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 ">
          <img
            className="filter sepia-100 saturate-150 hue-rotate-15 md:block w-14"
            src={logoImg}
            alt="logo"
          />

          <p className="text-6xl">VTMERCH</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 border-t border-gray-700">
        {/* Logo and Subscribe Section */}
        <div className="mt-4 ">
          <p className="mb-4">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>
          <div className="flex flex-col gap-4 items-center space-x-">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-10 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
            />
            <button className="px-24 py-2 bg-white text-black rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Customer Services Links */}
        <div className="mt-4 ms-4">
          <h4 className="text-lg font-bold mb-4">Customer Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="mt-4">
          <h4 className="text-lg font-bold mb-4">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Bestseller
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Latest Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                All Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="mt-4">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="mb-2">
            Available between 8AM to 8PM. Ready to answer your questions.
          </p>
          <p className="mb-2 flex items-center">
            <AiOutlinePhone className="mr-2" /> 013456789
          </p>
          <p className="mb-6 flex items-center">
            <AiOutlineMail className="mr-2" /> store@valuetainment.com
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-8 pt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Valuetainment Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src={visa} alt="Visa" className="w-10" />
            <img src={PayPal} alt="PayPal" className="w-10" />
            <img src={ApplePay} alt="ApplePay" className="w-10" />
            <img src={AmericanExpress} alt="American Express" className="w-10" />
            <img src={Visa2} alt="Visa2" className="w-10" />
            <img src={AmericanExpress} alt="American Express" className="w-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
