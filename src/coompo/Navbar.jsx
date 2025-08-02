import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">NGO Portal</Link>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/form"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Volunteer Form
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
