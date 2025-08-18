import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";

const slides = [
  {
    image: hero1,
    address:
      "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201307",
    buttonText: "Reserve a table",
  },
  {
    image: hero2,
    address:
      "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201307",
    buttonText: "Reserve a table",
  },
  {
    image: hero3,
    address:
      "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201307",
    buttonText: "Reserve a table",
  },
  {
    image: hero4,
    address:
      "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201307",
    buttonText: "Reserve a table",
  },
  {
    image: hero5,
    address:
      "STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201307",
    buttonText: "Reserve a table",
  },
];

const Hero = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden font-raleway font-thin">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={slides[index].image.src} // ✅ use .src for the key
          src={slides[index].image.src} // ✅ string instead of StaticImageData
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark overlay across image */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Address & Button - pinned to bottom-left */}
      <motion.div
        key={slides[index].address}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-10 left-10 text-white max-w-3xl"
      >
        {/* <h1 className="text-2xl md:text-2xl font-bold mb-3 leading-snug">
          📍 {slides[index].address}
        </h1>

        <Link href="/contact">
          <button className="relative inline-block px-6 py-2 border border-[var(--primary-color)] font-light group overflow-hidden transition-all">
            <span className="relative z-10 text-[var(--primary-color)] group-hover:text-black transition-colors duration-300">
              {slides[index].buttonText}
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            />
          </button>
        </Link> */}
      </motion.div>
    </div>
  );
};

export default Hero;
