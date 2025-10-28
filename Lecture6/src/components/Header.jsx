import React from "react";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold text-indigo-600">MyWebsite</h1>

      {/* Navigation Links */}
      <nav className="space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
