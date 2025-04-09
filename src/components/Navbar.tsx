'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Diego Sanchez
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Experience
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="#experience" className="block text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium">
              Experience
            </Link>
            <Link href="#projects" className="block text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link href="#contact" className="block text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 