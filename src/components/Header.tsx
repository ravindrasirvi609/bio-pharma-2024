"use client";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#00a28b]">
          GBP Conference
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-[#ec4c5b]">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#ec4c5b]">
            About
          </Link>
          <Link href="/schedule" className="text-gray-600 hover:text-[#ec4c5b]">
            Schedule
          </Link>
          <Link href="/speakers" className="text-gray-600 hover:text-[#ec4c5b]">
            Speakers
          </Link>
          <Link
            href="/register"
            className="bg-[#1bc8da] text-white px-4 py-2 rounded hover:bg-[#0196c0]"
          >
            Register
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/schedule"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Schedule
          </Link>
          <Link
            href="/speakers"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Speakers
          </Link>
          <Link
            href="/register"
            className="block px-4 py-2 bg-[#1bc8da] text-white hover:bg-[#0196c0]"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
