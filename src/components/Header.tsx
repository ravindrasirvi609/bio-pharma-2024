"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#00a28b]" : "text-white"
            }`}
          >
            BioConf
          </span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          {["Home", "About", "Schedule", "Speakers", "Sponsors"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-[#ec4c5b] transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-[#ec4c5b] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d43c4b] transition-colors"
          >
            Register Now
          </Link>
        </nav>
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 py-4 px-4 space-y-4">
          {["Home", "About", "Schedule", "Speakers", "Sponsors"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-gray-600 hover:text-[#ec4c5b] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/register"
            className="block bg-[#ec4c5b] text-white px-4 py-2 rounded-full text-center hover:bg-[#d43c4b] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
