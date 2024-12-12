import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Shiro's Cafe</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-gray-900">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#booking" className="text-gray-700 hover:text-gray-900">
              Book a Table
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#booking"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Book a Table
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
