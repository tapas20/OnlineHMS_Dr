import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const AuthButtons = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? "flex-col w-full" : "space-x-4"}`}>
      <NavLink
        to="/"
        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all ${
          isMobile ? "w-full mt-2" : ""
        }`}
        onClick={isMobile ? closeMenu : undefined}
      >
        SignUp
      </NavLink>
      <NavLink
        to="/"
        className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all ${
          isMobile ? "w-full mt-2" : ""
        }`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Login
      </NavLink>
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 shadow-lg w-full px-6 py-4 flex justify-between items-center relative z-40 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src=""
            className="h-16 md:h-16 mr-4"
            alt="Health Logo"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:flex md:space-x-8 p-4 md:p-0 shadow-md md:shadow-none rounded-md md:rounded-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="block p-3 font-semibold text-gray-800 hover:text-blue-600"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Contact Us
            </NavLink>
          </li>

          {/* Login/Signup Buttons for Mobile */}
          <li className="block md:hidden">
            <AuthButtons isMobile />
          </li>
        </ul>

        {/* Login/Signup Buttons for Desktop */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>
      </nav>
    </>
  );
};

export default Header;