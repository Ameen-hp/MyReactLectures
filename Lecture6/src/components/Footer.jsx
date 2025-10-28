import { Link } from "react-router-dom";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Website Name */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-indigo-400">MyWebsite</h1>
          <p className="text-gray-400">Building modern React apps with style</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-400 transition">🐦</a>
          <a href="#" className="hover:text-indigo-400 transition">📘</a>
          <a href="#" className="hover:text-indigo-400 transition">📸</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
