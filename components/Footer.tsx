import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)]  text-black  font-raleway text-sm">
      {/* Newsletter Section */}
      <div
        id="newsletter-section"
        className="border-t border-gray-300 dark:border-gray-700 w-full"
      >
        <div className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 sm:px-6 md:px-10 font-raleway">
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
                Sign up for exclusive offers from us
              </h2>
            </div>

            <div className="w-full  flex flex-col items-center lg:items-end gap-4">
              <p className="text-center lg:text-left text-base">
                Sign up to our newsletter for all the latest news and events.
              </p>

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
      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 py-10 text-sm">
        {/* Left: Logo + Social Media */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <Link href="/" className="uppercase">
            <Image
              src={logo}
              alt="Stellar Binge Logo"
              width={150}
              height={50}
            />
          </Link>
          <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
            <Link
              href="https://www.facebook.com/bingenoida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-[#4267B2] transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stellar-binge-78691321a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-[#0077B5] transition" />
            </Link>
            <Link
              href="https://www.instagram.com/stellar_binge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#C13584] transition" />
            </Link>
            <Link
              href="https://www.youtube.com/@Stellar_Binge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-[#FF0000] transition" />
            </Link>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col items-center space-y-4">
          {/* Quick Links */}
          <ul className="space-y-2 text-center">
            {[
              { name: "About Us", href: "/our-journey" },
              { name: "Contact Us", href: "/contact" },
              { name: "Menu", href: "/menu" },
              { name: "Our Creations", href: "/gallery" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--primary-color)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Policies & Sitemap */}
          <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms" },
              { name: "Sitemap", href: "/sitemap" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--primary-color)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:text-right space-y-2 text-gray-700 dark:text-gray-200">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>
            STELLAR IT PARK, C-25, C Block, Phase 2,
            <br /> Sector 62, Noida, Uttar Pradesh 201307
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Floor G · Stellar IT Park
          </p>
          <p>
            <Link
              href="tel:+919599816865"
              className="hover:text-[var(--primary-color)] transition"
            >
              +91 95998 16865
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-xs text-gray-600 dark:text-gray-400 text-center">
        BINGE ©2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
