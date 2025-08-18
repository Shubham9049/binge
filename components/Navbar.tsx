"use client";

import { useState } from "react";
import {
  Menu,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Our Journey", href: "/our-journey" },
  { title: "Meet the Chef", href: "/meet-the-chef" },
  { title: "Our Creations", href: "/our-creations" },
  { title: "Moments Captured", href: "/gallery" },
  { title: "Let’s Connect", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // Track active nav link

  return (
    <nav className="fixed top-0 left-0 z-50 w-full font-raleway font-light shadow-sm bg-[#ffffff]">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-10">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="uppercase">
            <Image
              src="/logo.png"
              alt="Stellar Binge Logo"
              width={150}
              height={50}
            />
          </Link>
          <div className="border-l self-stretch border-gray-400"></div>

          {/* Nav Items */}
          <ul className="flex gap-6">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`py-8 transition-colors ${
                    activeLink === item.href
                      ? "text-[#B10203] font-medium"
                      : "text-[#000000] hover:text-[#B10203]"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <span className="text-md text-[#000000] font-thin cursor-pointer py-8 ">
              Follow Us
            </span>
            <div className="absolute top-12 -right-20 min-w-[150px] rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white dark:bg-gray-800">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Facebook size={16} /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Twitter size={16} /> Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Linkedin size={16} /> Linkedin
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Youtube size={16} /> Youtube
              </a>
            </div>
          </div>
          <span className="text-md text-[#000000] font-thin cursor-pointer hover:text-[#B10203]">
            <a href="tel:+1234567890">Call Us</a>
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Stellar Binge Logo"
            width={150}
            height={50}
          />
        </a>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-3rem)] overflow-y-auto px-4 pt-4 pb-4 z-40 bg-white dark:bg-black">
          <div className="space-y-6">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                    setMobileMenu(false);
                  }}
                  className={`block py-2 font-light ${
                    activeLink === item.href
                      ? "text-[#B10203] font-medium"
                      : "text-black hover:text-[#B10203]"
                  }`}
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>

          {/* Call Box */}
          <div className="mt-8 flex w-full">
            <div className="flex-1 border border-gray-500 text-center py-2 hover:text-[#B10203]">
              <a href="tel:+1234567890">Call Us</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
