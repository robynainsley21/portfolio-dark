import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuIcon = () => (
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
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
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
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    navigate(page);
    console.log(`Navigated to ${page}`);
  };

  const menuItems = [
    { title: "_home", id: "/" },
    { title: "_about", id: "/about" },
    { title: "_education&experience", id: "/resume" },
    { title: "_projects", id: "/projects" },
    { title: "_contact", id: "/contact" },
  ];

  return (
    <nav className="shadow-lg fixed w-full top-0 left-0 z-50">
      {/* Main navbar container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center h-8 w-auto"
          >
            <img
              src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png"
              alt="logo"
              loading="lazy"
            />
          </button>

               {/* Desktop Navigation */}
               <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    currentPage === item.id
                      ? "text-purple-600"
                      : "text-white hover:text-purple-900 hover:bg-gray-50"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-purple-900 hover:bg-gray-100 focus:outline-none rounded-md"
          >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 mobile-nav shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 violet_text hover:text-gray-900 hover:bg-gray-100 focus:outline-none rounded-md"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200
                ${
                  currentPage === item.id
                    ? "text-purple-600"
                    : "text-white hover:text-purple-900 hover:bg-gray-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
