import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import logoImg from "../../../assets/Logo/Valuetainment.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mb-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 ">
          <img className="filter sepia-100 saturate-150 hue-rotate-15 md:block w-12" src={logoImg} alt="logo" />
          
          <p className="text-6xl">VTMERCH</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Subscribe Section */}
        <div>
          <p className="mb-4">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>
          <div className="flex flex-col gap-4 items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none text-white"
            />
            <button className="px-20 py-2 bg-white text-black rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Customer Services Links */}
        <div>
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
        <div>
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
        <div>
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
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Valuetainment Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="w-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="w-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="w-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
