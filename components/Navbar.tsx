"use client";

import { useEffect, useState } from "react";
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
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Our Journey", href: "/our-journey" },
  { title: "Meet the Chef", href: "/meet-the-chef" },
  { title: "Menu", href: "/menu" },
  { title: "Our Creations", href: "/gallery" },
  { title: "Blogs", href: "/blogs" },
  { title: "Let’s Connect", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // Track active nav link
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full font-raleway font-light shadow-sm bg-[#ffffff]">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-10">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="uppercase">
            <Image
              src={logo}
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
                  className={`py-6 transition-colors border-b-4 border-transparent ${
                    activeLink === item.href
                      ? "text-[var(--primary-color)] font-medium "
                      : "text-[#000000] hover:text-[var(--primary-color)] hover:border-b-[var(--primary-color)]"
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
              <Link
                href="https://www.facebook.com/bingenoida"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Facebook size={16} /> Facebook
              </Link>
              <Link
                href="https://www.instagram.com/stellar_binge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Instagram size={16} /> Instagram
              </Link>

              <Link
                href="https://www.linkedin.com/in/stellar-binge-78691321a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Linkedin size={16} /> Linkedin
              </Link>
              <Link
                href="https://www.youtube.com/@Stellar_Binge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:text-[#B10203]"
              >
                <Youtube size={16} /> Youtube
              </Link>
            </div>
          </div>
          <span className="text-md text-[#000000] font-thin cursor-pointer hover:text-[var(--primary-color)]">
            <Link
              href="tel:+919599816865

"
            >
              Call Us
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Stellar Binge Logo"
            width={150}
            height={50}
          />
        </Link>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-3rem)] overflow-y-auto px-4 pt-4 pb-4 z-40 bg-white dark:bg-black">
          <div className="space-y-6">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                    setMobileMenu(false);
                  }}
                  className={`block py-2 font-light ${
                    activeLink === item.href
                      ? "text-[var(--primary-color)] font-medium"
                      : "text-black hover:text-[var(--primary-color)]"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Call Box */}
          <div className="mt-8 flex w-full">
            <div className="flex-1 border border-gray-500 text-center py-2 hover:text-[var(--primary-color)]">
              <Link href="tel:+1234567890">Call Us</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
