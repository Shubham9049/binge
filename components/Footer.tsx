import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white font-raleway text-sm">
      {/* Newsletter Section */}
      <div
        id="newsletter-section"
        className="border-t border-gray-300 dark:border-gray-700 w-full"
      >
        <div className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 sm:px-6 md:px-10 font-raleway">
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
                Sign up for exclusive <br /> offers from us
              </h2>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-4">
              <p className="text-center lg:text-left text-base">
                Sign up to our newsletter for all the latest news and events.
              </p>

              {/* Input & Button */}
              <div className="w-full flex flex-col sm:flex-row items-center  justify-end gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-[300px] px-4 py-3 text-black dark:text-white bg-transparent border border-gray-300 focus:outline-none"
                />
                <button className="relative group flex items-center justify-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
                  <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                    Subscribe
                  </span>
                  <span
                    className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                    style={{ backgroundColor: "#B10203" }}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top horizontal line */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full" />

      {/* Logo and CONTACTS Title */}
      <div className="w-11/12 mx-auto  px-3 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 border-t border-[var(--primary-color)]" />
            <Link href="/" className="uppercase">
              <Image
                src="/logo.png"
                alt="Stellar Binge Logo"
                width={150}
                height={50}
              />
            </Link>
            <div className="w-20 border-t border-[var(--primary-color)]" />
          </div>
        </div>
        <h2 className="text-2xl font-thin md:mt-0">CONTACTS</h2>
      </div>

      {/* Mid horizontal line */}
      <div className="w-11/12 mx-auto px-3 md:px-10  border-t border-gray-300 dark:border-gray-700 mb-8" />

      {/* Main content */}
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-12 lg:px-6 gap-8 pb-10 font-light dark:font-thin ">
        {/* Left: Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            ["Our Concepts", "GAIA", "Shanghai Me", "La Maison Ani"],
            [
              "Dubai Venues",
              "International Venues",
              "Events",
              "Private Dining",
            ],
            ["Reservations", "Careers", "Press"],
            ["About Us", "Contact Us"],
          ].map((group, idx) => (
            <ul key={idx} className="space-y-2">
              {group.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[var(--primary-color)] transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-lg">London, UK</h3>
          <p className="text-gray-700 dark:text-gray-200">
            1 Bell Street, London, London, United Kingdom, NW1 5BY
          </p>
          <div className="flex justify-start lg:justify-end gap-4 pt-2 text-[var(--primary-color)] text-xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="flex md:justify-end">
            <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden w-fit">
              <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                CALL US
              </span>
              <span
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                style={{ backgroundColor: "#B10203" }}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 py-6 text-xs text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row justify-between gap-2">
        <span>Fern Hospitality ©2025 All Rights Reserved</span>
        <div className="flex gap-4">
          {["Terms of Use", "Privacy Policy", "Sitemap"].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
