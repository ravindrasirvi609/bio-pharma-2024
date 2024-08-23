// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Schedule", "Speakers", "Register"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-[#1bc8da] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="mb-2">Email: info@gbpconference.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaTwitter, link: "https://twitter.com" },
                { Icon: FaLinkedin, link: "https://linkedin.com" },
                { Icon: FaFacebook, link: "https://facebook.com" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#1bc8da] transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Newsletter
            </h3>
            <p className="mb-4">Stay updated with the latest conference news</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full sm:w-2/3 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-[#1bc8da] bg-gray-800 text-white"
              />
              <button
                type="submit"
                className="bg-[#1bc8da] text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-[#0196c0] transition-colors duration-300 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {currentYear} Global Bio Pharma Conference. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
