import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';

const ContactUs = () => {
  const itemRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFocused(true);
            setNavVisible(false); // Hide navbar when in focus
          } else {
            setIsFocused(false);
            setNavVisible(true); // Show navbar when not in focus
          }
        });
      },
      { threshold: 0.6 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <NavBar isVisible={navVisible} />

      {/* Full-Screen Container */}
      <div
        className={`flex items-center justify-center h-screen transition-colors duration-700 ease-in-out ${
          isFocused ? 'bg-primary/60' : 'bg-gray-100'
        }`}
      >
        {/* Focusable Item */}
        <div
          ref={itemRef}
          className={`transition-transform duration-700 ease-in-out p-10 md:p-20 rounded-lg shadow-lg ${
            isFocused ? 'scale-110 md:scale-150 bg-primary text-white' : 'scale-100 bg-gray-200'
          }`}
          style={{ maxWidth: '90%', maxHeight: '80%' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Get to Know Us!
          </h2>
          <p className="mt-4 text-md md:text-lg text-center">
            Have questions or just want to connect? We’d love to hear from you!
          </p>

          <button className="mt-6 bg-secondary/90 text-white rounded-2xl px-4 py-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
