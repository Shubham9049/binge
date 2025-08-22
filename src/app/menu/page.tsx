"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";

import { useRef, useState } from "react";

// 👉 Import your menu images
import menuPage1 from "../../../assets/menu/2025-01-17 (1).webp";
import menuPage2 from "../../../assets/menu/2025-01-17 (10).webp";
import menuPage3 from "../../../assets/menu/2025-01-17 (11).webp";
import menuPage4 from "../../../assets/menu/2025-01-17 (12).webp";
import menuPage5 from "../../../assets/menu/2025-01-17 (13).webp";
import menuPage6 from "../../../assets/menu/2025-01-17 (14).webp";
import menuPage7 from "../../../assets/menu/2025-01-17 (15).webp";
import menuPage8 from "../../../assets/menu/2025-01-17 (16).webp";
import menuPage9 from "../../../assets/menu/2025-01-17 (17).webp";
import menuPage10 from "../../../assets/menu/2025-01-17 (18).webp";
import menuPage11 from "../../../assets/menu/2025-01-17 (19).webp";
import menuPage12 from "../../../assets/menu/2025-01-17 (2).webp";
import menuPage13 from "../../../assets/menu/2025-01-17 (20).webp";
import menuPage14 from "../../../assets/menu/2025-01-17 (21).webp";
import menuPage15 from "../../../assets/menu/2025-01-17 (22).webp";
import menuPage16 from "../../../assets/menu/2025-01-17 (23).webp";
import menuPage17 from "../../../assets/menu/2025-01-17 (24).webp";
import menuPage18 from "../../../assets/menu/2025-01-17 (25).webp";
import menuPage19 from "../../../assets/menu/2025-01-17 (26).webp";
import menuPage20 from "../../../assets/menu/2025-01-17 (3).webp";
import menuPage21 from "../../../assets/menu/2025-01-17 (4).webp";
import menuPage22 from "../../../assets/menu/2025-01-17 (5).webp";
import menuPage23 from "../../../assets/menu/2025-01-17 (6).webp";
import menuPage24 from "../../../assets/menu/2025-01-17 (7).webp";
import menuPage25 from "../../../assets/menu/2025-01-17 (8).webp";
import menuPage26 from "../../../assets/menu/2025-01-17 (9).webp";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (menuRef.current) {
      const yOffset = -50; // adjust for navbar
      const y =
        menuRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 👉 Store all images in an array
  const menuImages = [
    menuPage1,
    menuPage2,
    menuPage3,
    menuPage4,
    menuPage5,
    menuPage6,
    menuPage7,
    menuPage8,
    menuPage9,
    menuPage10,
    menuPage11,
    menuPage12,
    menuPage13,
    menuPage14,
    menuPage15,
    menuPage16,
    menuPage17,
    menuPage18,
    menuPage19,
    menuPage20,
    menuPage21,
    menuPage22,
    menuPage23,
    menuPage24,
    menuPage25,
    menuPage26,
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
    setCurrentIndex((prev) => (prev === 0 ? menuImages.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === menuImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center pt-32">
        <Image src={banner} alt="Menu" fill priority className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Discover flavors crafted with passion — from appetizers to desserts.
          </p>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* MENU GRID SECTION */}
      <section ref={menuRef} className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Flip through our menu pages just like a catalog.
          </p>

          {/* Menu Pages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openModal(idx)}
                className="relative aspect-[3/4] w-full shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Menu Page ${idx + 1}`}
                  fill
                  className="object-contain bg-white hover:scale-105 transition-transform duration-300"
                />
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
              src={menuImages[currentIndex]}
              alt={`Menu Page ${currentIndex + 1}`}
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
