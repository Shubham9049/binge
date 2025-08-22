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
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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

  const socialLinks = [
    {
      icon: faFacebookF,
      href: "https://www.facebook.com/bingenoida",
      color: "#1877F2",
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/stellar_binge",
      color: "#E1306C",
    },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/@Stellar_Binge",
      color: "#FF0000",
    },

    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/stellar-binge-78691321a/",
      color: "#0077B5",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full font-raleway font-light shadow-sm bg-[#ffffff]">
      {/* Top Bar */}
      <div className="bg-gray-100 shadow text-black text-sm px-4 md:px-16 py-2 flex justify-between items-center flex-wrap gap-2">
        <div className="hidden md:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--primary-color)]" />
          <span>
            STELLAR IT PARK, C-25, C Block, Phase 2, Sector 62, Noida, Uttar
            Pradesh 201307
          </span>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* <a
            href="tel:+918368573451"
            className="hidden md:flex items-center gap-1"
          >
            <Phone className="w-4 h-4 hover:text-[var(--primary-color)]" />
            <span>+91 95998 16865</span>
          </a> */}
          {/* <a
            href="mailto:vipul@bigwigmedia.in"
            className="w-7 h-7 flex items-center justify-center border border-gray-500 rounded-full transition-transform duration-500 hover:rotate-[360deg]"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.color = "var(--primary-color)";
            }}
          >
            <FaEnvelope
              className="text-md"
              style={{ color: "var(--primary-color)" }}
            />
          </a> */}
          <p className="text-lg">Follow us:</p>
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center border border-gray-500 rounded-full transition-all duration-300 hover:rotate-[360deg]"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = social.color;
                const icon = e.currentTarget.querySelector("svg");
                if (icon) icon.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                const icon = e.currentTarget.querySelector("svg");
                if (icon) icon.style.color = social.color;
              }}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="text-sm"
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
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
              className="p-2"
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
          {/* <div className="relative group">
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
          </div> */}
          <span className="text-md text-[#000000] font-thin cursor-pointer hover:text-[var(--primary-color)]">
            <Link href="tel:+919599816865">
              <span className="inline-flex items-center gap-2">
                <FaPhoneAlt />
                Call Us: +91 9599816865
              </span>
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
