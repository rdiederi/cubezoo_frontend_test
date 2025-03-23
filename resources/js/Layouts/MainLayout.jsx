import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="px-6 py-4 bg-[#121212] shadow relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">HIGH FIVE</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/browse" className="hover:text-yellow-400">Browse</Link>
            <Link href="/pricing" className="hover:text-yellow-400">Pricing</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="text-sm hover:underline">Sign In</Link>
            <Link href="/register" className="bg-yellow-400 text-black px-4 py-2 rounded text-sm font-semibold">Sign Up</Link>
          </div>

          {/* Burger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#1A1A1A] rounded shadow-lg p-4 space-y-4">
            <Link href="/" className="block hover:text-yellow-400">Home</Link>
            <Link href="/browse" className="block hover:text-yellow-400">Browse</Link>
            <Link href="/pricing" className="block hover:text-yellow-400">Pricing</Link>
            <hr className="border-gray-700" />
            <Link href="/login" className="block hover:underline">Sign In</Link>
            <Link
              href="/register"
              className="block bg-yellow-400 text-black text-center py-2 rounded font-semibold hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-sm text-gray-400 px-8 py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-white font-bold text-lg mb-4">HIGH FIVE</div>
            <div className="flex space-x-4">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white mb-2">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Pricing and Plans</h4>
            <ul>
              <li><a href="#" className="hover:underline">View Plans</a></li>
              <li><a href="#" className="hover:underline">For Teams</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Customer Support</h4>
            <ul>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} HIGH FIVE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
