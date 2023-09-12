import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and MovieBox Text */}
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            <img
              src={Logo}
              alt="MovieBox Logo"
              className="w-8 h-8 mr-2"
            />
            MovieBox
          </Link>
        </div>

        {/* Search Section */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-700"
          />
        </div>

        {/* Sign-In Button */}
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
          Sign In
        </button>

        {/* Toggle Bar (Hamburger Menu) - You can replace this with your own toggle mechanism */}
        <div className="md:hidden">
          {/* Replace with your toggle button */}
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
