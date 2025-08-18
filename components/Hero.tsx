import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Experience Luxury, Redefined",
    description:
      "Fern Hospitality pioneers excellence in hospitality investments across iconic destinations.",
    buttonText: "Contact Us",
  },
  {
    image: "/hero2.jpg",
    title: "Where Vision Meets Destination",
    description:
      "We partner with world-class brands to create timeless experiences in hospitality.",
    buttonText: "Contact Us",
  },
  {
    image: "/hero3.jpg",
    title: "Crafting Tomorrow’s Landmarks",
    description:
      "Join Fern Hospitality in building extraordinary spaces that inspire and endure.",
    buttonText: "Contact Us",
  },
  {
    image: "/hero4.jpg",
    title: "Where Vision Meets Destination",
    description:
      "We partner with world-class brands to create timeless experiences in hospitality.",
    buttonText: "Contact Us",
  },
  {
    image: "/hero5.jpg",
    title: "Crafting Tomorrow’s Landmarks",
    description:
      "Join Fern Hospitality in building extraordinary spaces that inspire and endure.",
    buttonText: "Contact Us",
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
    <div className="relative w-full h-[100vh] overflow-hidden font-raleway font-thin">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt={slides[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center text-white max-w-3xl"
        >
          <h1 className="text-3xl md:text-6xl mb-3 leading-tight">
            {slides[index].title}
          </h1>
          <p className="text-base md:text-lg mb-6">
            {slides[index].description}
          </p>
          <a href="/contact">
            <button className="relative inline-block px-6 py-2 border border-[var(--primary-color)] font-light group overflow-hidden transition-all">
              <span className="relative z-10 text-[var(--primary-color)] group-hover:text-black transition-colors duration-300">
                {slides[index].buttonText}
              </span>
              <span
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                style={{ backgroundImage: "var(--bg-primary-gradient)" }}
              />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
