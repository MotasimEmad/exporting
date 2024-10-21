import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../App.css';

const NavBar = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block px-16 h-12 md:h-20 fixed-nav bg-[#993333] border-t-2 border-secondary transition-transform duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex h-full">
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 rounded-md" />
            </div>
            <div className="md:flex space-x-6 font-normal text-sm text-white ml-6">
              <a>
                Home
                <span className="underline"></span>
              </a>
              <a href='#about-us'>
                About us
                <span className="underline"></span>
              </a>
              <a>
                Contact us
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <nav className={`flex items-center justify-between px-6 py-4 fixed-nav`}>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 rounded-md" />
          </div>
          <button
            onClick={toggleMenu}
            className={`text-primary hover:text-primary focus:outline-none text-white`}
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
              <a>
                Home
                <span className="underline"></span>
              </a>
              <hr className="border-t border-gray-400 my-4" /> {/* Divider */}
              <a>
                About us
                <span className="underline"></span>
              </a>
              <hr className="border-t border-gray-400 my-4" /> {/* Divider */}
              <a>
                Contact us
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
