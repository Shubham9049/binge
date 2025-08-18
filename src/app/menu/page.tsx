"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";

import { useRef } from "react";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (menuRef.current) {
      const yOffset = -50; // 👈 adjust gap from top (navbar height)
      const y =
        menuRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <Image src={banner} alt="Menu" fill priority className="object-cover" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Discover flavors crafted with passion — from appetizers to desserts.
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

      {/* MENU SECTION (placeholder for now) */}
      <section ref={menuRef} className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            From traditional recipes to modern creations, every dish tells a
            story. Browse our menu categories below.
          </p>
          {/* 👉 Here we’ll add menu categories grid (Starters, Main Course, Desserts, Beverages) */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
