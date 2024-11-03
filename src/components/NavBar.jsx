// NavBar.js
import React, { useState } from 'react';
import logo from '../assets/logo2.png';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu (sets isOpen to false)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block px-16 h-20 fixed top-0 left-0 w-full bg-[#993333] border-t-2 border-secondary transition-transform duration-500 z-50`}
      >
        <div className="container mx-auto flex h-full">
          <div className="flex items-center justify-between w-full">
            <Link to={`/`} className="flex items-center">
              <img src={logo} alt="Logo" className="h-14 rounded-md" />
            </Link>
            <div className="md:flex space-x-6 font-normal text-sm text-white ml-6">
              <Link
                to={`/`}
                className={`hover:text-secondary ${
                  location.pathname === '/' ? 'text-secondary' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`hover:text-secondary ${
                  location.pathname.startsWith('/products') ? 'text-secondary' : ''
                }`}
              >
                Products
              </Link>
              <Link
                to="/team"
                className={`hover:text-secondary ${
                  location.pathname.startsWith('/team') ? 'text-secondary' : ''
                }`}
              >
                Team
              </Link>
              <Link
                to={`/contact-us`}
                className={`hover:text-secondary ${
                  location.pathname === '/contact-us' ? 'text-secondary' : ''
                }`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="block md:hidden px-6 py-4 fixed top-0 left-0 w-full bg-[#993333] z-50">
        <div className="flex items-center justify-between">
          <Link to={`/`} onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-12 rounded-md" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#993333] transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              to={`/`}
              onClick={closeMenu}
              className={`text-white text-lg hover:text-secondary ${
                location.pathname === '/' ? 'text-secondary' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={closeMenu}
              className={`text-white text-lg hover:text-secondary ${
                location.pathname.startsWith('/products') ? 'text-secondary' : ''
              }`}
            >
              Products
            </Link>
            <Link
              to="/team"
              onClick={closeMenu}
              className={`text-white text-lg hover:text-secondary ${
                location.pathname.startsWith('/team') ? 'text-secondary' : ''
              }`}
            >
              Team
            </Link>
            <Link
              to={`/contact-us`}
              onClick={closeMenu}
              className={`text-white text-lg hover:text-secondary ${
                location.pathname === '/contact-us' ? 'text-secondary' : ''
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Overlay to close the menu when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
