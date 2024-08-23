// components/Footer.tsx
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#1bc8da]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1bc8da]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#1bc8da]">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-[#1bc8da]">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-[#1bc8da]">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@gbpconference.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#1bc8da]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#1bc8da]">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#1bc8da]">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with the latest conference news</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1bc8da]"
              />
              <button
                type="submit"
                className="bg-[#1bc8da] text-white px-4 py-2 rounded-r-md hover:bg-[#0196c0]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Global Bio Pharma Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
