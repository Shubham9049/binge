import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.webp";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/banqutes/img1.webp";
import hero9 from "../assets/banqute.webp";

const slides = [
  {
    image: hero7,
    title: "Dine. Sip. Unwind.",
    subtitle:
      "From Indian to Pan-Asian to World Cuisine – paired with crafted drinks in a luxurious setting.",
  },
  {
    image: hero1,
    title: "Modern & Sophisticated",
    subtitle:
      "Savor global flavors, signature cocktails, and a lounge experience like no other in Noida.",
  },
  {
    image: hero2,
    title: "Where Culinary Art Meets Timeless Elegance",
    subtitle:
      "A fine blend of world-class dining, elegant ambience, and unforgettable evenings.",
  },
  {
    image: hero3,
    title: "Crafted Plates, Memorable Evenings",
    subtitle:
      "Experience chef-curated dishes designed to delight every palate.",
  },
  {
    image: hero4,
    title: "Sip, Savor & Celebrate",
    subtitle:
      "Raise a glass to good times with handcrafted cocktails and premium spirits.",
  },
  {
    image: hero5,
    title: "Ambience That Inspires",
    subtitle:
      "Immerse yourself in a stylish setting perfect for gatherings, celebrations, or quiet escapes.",
  },
  {
    image: hero6,
    title: "Global Flavors, Local Heart",
    subtitle:
      "Authentic tastes from around the world, served with warm Indian hospitality.",
  },
  {
    image: hero8,
    title: "Celebrations Beyond Ordinary",
    subtitle:
      "From grand weddings to intimate gatherings, we create unforgettable experiences.",
  },
  {
    image: hero9,
    title: "Where Every Occasion Shines",
    subtitle:
      "Lavish spaces, exquisite dining, and seamless service for all your special events.",
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
    <div className="relative w-full h-[100vh] overflow-hidden font-raleway font-thin ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={slides[index].image.src} // ✅ use .src for the key
          src={slides[index].image.src} // ✅ string instead of StaticImageData
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-center"
        />
      </AnimatePresence>

      {/* Dark overlay across image */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Address & Button - pinned to bottom-left */}
      <motion.div
        key={slides[index].title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          {slides[index].title}
        </h1>

        <p className="mb-8 max-w-4xl text-lg md:text-xl text-gray-200 font-semibold">
          {slides[index].subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
