import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block px-16 h-20 fixed top-0 left-0 w-full bg-[#993333] border-t-2 border-secondary transition-transform duration-500 z-50`}
      >
        <div className="container mx-auto flex h-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 rounded-md" />
            </div>
            <div className="md:flex space-x-6 font-normal text-sm text-white ml-6">
              <Link to={`/`} className={`hover:text-secondary ${location.pathname === '/' ? 'text-secondary' : ''}`}>Home</Link>
              <Link to={`/products`} className={`hover:text-secondary ${location.pathname === '/products' ? 'text-secondary' : ''}`}>
                Products
              </Link>
              <Link to={`/contact-us`} className={`hover:text-secondary ${location.pathname === '/contact-us' ? 'text-secondary' : ''}`}>Contact us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <nav className={`flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full bg-[#993333] z-50`}>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 rounded-md" />
          </div>
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none`}
          >
            {isOpen ? (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu} className="close-button">
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
            </button>
            <div className="menu md:flex font-normal text-lg py-12 px-4">
            <Link to={`/`} className={`hover:text-secondary ${location.pathname === '/' ? 'text-secondary' : ''}`}>Home</Link>
            <hr className="border-t border-gray-400 my-4" />
              <Link to={`/products`} className={`hover:text-secondary ${location.pathname === '/products' ? 'text-secondary' : ''}`}>
                Products
              </Link>
              <hr className="border-t border-gray-400 my-4" />
              <Link to={`/contact-us`} className={`hover:text-secondary ${location.pathname === '/contact-us' ? 'text-secondary' : ''}`}>Contact us</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
