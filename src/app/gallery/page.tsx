"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";
import img1 from "../../../assets/food/Chilli Chicken Dry.webp";
import img2 from "../../../assets/food/Chilli Fish.webp";
import img3 from "../../../assets/food/Crispy Babycorn.webp";
import img4 from "../../../assets/food/Crispy Corns.webp";
import img5 from "../../../assets/food/Hara Bhara Kebab  - Copy.webp";
import img6 from "../../../assets/food/Makhmali seekh kebab.webp";
import img7 from "../../../assets/food/Murg Banno Kebab.webp";
import img8 from "../../../assets/food/Murgh Malai Kebab.webp";
import img9 from "../../../assets/food/Mutton Galouti.webp";
import img10 from "../../../assets/food/Non-Veg Kebab Paltter.webp";
import img11 from "../../../assets/food/Tandoori Chicken.webp";
import img12 from "../../../assets/food/Veg Manchurian Dry.webp";
import img13 from "../../../assets/food/Fish Curry.webp";
import img14 from "../../../assets/food/Mutton Roganjosh.webp";
import img15 from "../../../assets/food/Diwani Handi.webp";
import img16 from "../../../assets/food/Shahi Paneer.webp";
import img17 from "../../../assets/food/Paneer Lababdar.webp";
import img18 from "../../../assets/food/Dal Stellar.webp";
import img19 from "../../../assets/food/Kshmiri Fish Tikka.webp";
import { useRef, useState } from "react";

export default function OurCreationsPage() {
  const creationsRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (creationsRef.current) {
      const yOffset = -50; // 👈 adjust gap from top (navbar height)
      const y =
        creationsRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 👉 Store all images in an array
  // 👉 Menu Items (name + image + type)
  const menuItems = [
    { name: "Chilli Chicken Dry", img: img1, type: "non-veg" },
    { name: "Chilli Fish", img: img2, type: "non-veg" },
    { name: "Crispy Babycorn", img: img3, type: "veg" },
    { name: "Crispy Corns", img: img4, type: "veg" },
    { name: "Hara Bhara Kebab", img: img5, type: "veg" },
    { name: "Makhmali Seekh Kebab", img: img6, type: "non-veg" },
    { name: "Murg Banno Kebab", img: img7, type: "non-veg" },
    { name: "Murgh Malai Kebab", img: img8, type: "non-veg" },
    { name: "Mutton Galouti", img: img9, type: "non-veg" },
    { name: "Non-Veg Kebab Platter", img: img10, type: "non-veg" },
    { name: "Tandoori Chicken", img: img11, type: "non-veg" },
    { name: "Veg Manchurian Dry", img: img12, type: "veg" },
    { name: "Fish Curry", img: img13, type: "non-veg" },
    { name: "Mutton Roganjosh", img: img14, type: "non-veg" },
    { name: "Diwani Handi", img: img15, type: "veg" },
    { name: "Shahi Paneer", img: img16, type: "veg" },
    { name: "Paneer Lababdar", img: img17, type: "veg" },
    { name: "Dal Stellar", img: img18, type: "veg" },
    { name: "Kashmiri Fish Tikka", img: img19, type: "non-veg" },
  ];

  // 👉 Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] flex items-center justify-center pt-32">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Our Creations"
          fill
          priority
          className="object-fill"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Creations</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            A showcase of flavors, artistry, and passion — crafted by our chefs
            to delight your senses.
          </p>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* MENU GRID SECTION */}
      <section ref={creationsRef} className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Flip through our menu pages just like a catalog.
          </p>

          {/* Menu Pages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openModal(idx)}
                className="relative aspect-[3/4] w-full shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer flex flex-col"
              >
                <div className="relative flex-1">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain bg-white hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-gray-100 py-2 text-center font-semibold text-gray-800">
                  {item.name} {item.type === "veg" ? "🥦" : "🍗"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            ›
          </button>

          {/* Image */}
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-[80vh]">
            <Image
              src={menuItems[currentIndex].img}
              alt={menuItems[currentIndex].name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
