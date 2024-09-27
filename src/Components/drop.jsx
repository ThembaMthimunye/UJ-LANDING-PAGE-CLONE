import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800">
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <a href="#home" className="text-white text-lg hover:bg-red-600 hover:text-white px-4 py-2 transition duration-200">
            Home
          </a>
          <a href="#news" className="text-white text-lg hover:bg-red-600 hover:text-white px-4 py-2 transition duration-200">
            News
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white text-lg hover:bg-red-600 px-4 py-2 transition duration-200 focus:outline-none"
            >
              Dropdown <FaCaretDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-1 rounded-md w-48 z-10">
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Link 1</a>
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Link 2</a>
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Link 3</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-center text-xl">Dropdown Menu inside a Navigation Bar</h3>
      <p className="text-center">Click on the "Dropdown" button to see the dropdown menu.</p>
    </div>
  );
};

export default Navbar;
