"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.webp";
import { useRef, useState } from "react";
import MobileContactBar from "../../../components/MobileContactBar";
import type { StaticImageData } from "next/image";

// 👉 Import all images
import menuPage1 from "../../../assets/menu/Indian main cousrse non-veg.webp";
import menuPage2 from "../../../assets/menu/Soups.webp";
import menuPage3 from "../../../assets/menu/appatizers non-veg.webp";
import menuPage4 from "../../../assets/menu/appetizers veg.webp";
import menuPage5 from "../../../assets/menu/global main course non-veg.webp";
import menuPage6 from "../../../assets/menu/global main course veg.webp";
import menuPage7 from "../../../assets/menu/global starter veg&non-veg.webp";
import menuPage8 from "../../../assets/menu/indian main course veg (2).webp";
import menuPage9 from "../../../assets/menu/indian main course veg.webp";
import menuPage11 from "../../../assets/menu/liqure (2).jpg";
import menuPage12 from "../../../assets/menu/liqure (2).webp";
import menuPage13 from "../../../assets/menu/liqure (3).jpg";
import menuPage14 from "../../../assets/menu/liqure (3).webp";
import menuPage15 from "../../../assets/menu/liqure (4).jpg";
import menuPage16 from "../../../assets/menu/liqure (5).jpg";
import menuPage17 from "../../../assets/menu/liqure.jpg";
import menuPage18 from "../../../assets/menu/liqure.webp";
import menuPage19 from "../../../assets/menu/mocktails.webp";
import menuPage20 from "../../../assets/menu/munchies.webp";
import menuPage21 from "../../../assets/menu/pan aisa starter non-veg.webp";
import menuPage22 from "../../../assets/menu/pan asian main course non-veg.webp";
import menuPage23 from "../../../assets/menu/pan asian main course veg & non veg.webp";
import menuPage24 from "../../../assets/menu/pan asian starter veg.webp";
import menuPage25 from "../../../assets/menu/Rice&Biryani.webp";
import menuPage26 from "../../../assets/menu/salads (2).webp";
import menuPage27 from "../../../assets/menu/salads.webp";
import menuPage28 from "../../../assets/menu/soft bevrage.webp";
import menuPage29 from "../../../assets/menu/tandoor non-veg.webp";
import menuPage30 from "../../../assets/menu/tandoor veg.webp";
import menuPage31 from "../../../assets/menu/tandoor-veg.webp";
import menuPage32 from "../../../assets/menu/yougets & deserts.webp";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (menuRef.current) {
      const yOffset = -70;
      const y =
        menuRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 👉 Structured Menu Categories
  const categories = [
    {
      title: "Soups & Salads",
      sub: [
        { name: "Soups", images: [menuPage2] },
        { name: "Salads", images: [menuPage26, menuPage27] },
      ],
    },
    {
      title: "Cocktails & Mocktails",
      sub: [
        { name: "Mocktails", images: [menuPage19] },
        {
          name: "Liquor (Alcoholic cocktails)",
          images: [
            menuPage11,
            menuPage12,
            menuPage13,
            menuPage14,
            menuPage15,
            menuPage16,
            menuPage17,
            menuPage18,
          ],
        },
        { name: "Soft Beverages", images: [menuPage28] },
      ],
    },
    {
      title: "Entrées (Starters)",
      sub: [
        {
          name: "Tandoor Veg & Non-Veg",
          images: [menuPage29, menuPage30, menuPage31],
        },
        { name: "Global Starter Veg & Non-Veg", images: [menuPage7] },
        {
          name: "Pan Asian Starter Veg & Non-Veg",
          images: [menuPage21, menuPage24],
        },
        { name: "Appetizers Veg & Non-Veg", images: [menuPage3, menuPage4] },
        { name: "Munchies", images: [menuPage20] },
      ],
    },
    {
      title: "Main Course",
      sub: [
        {
          name: "Indian Main Course Veg & Non-Veg",
          images: [menuPage1, menuPage8, menuPage9],
        },
        {
          name: "Global Main Course Veg & Non-Veg",
          images: [menuPage5, menuPage6],
        },
        {
          name: "Pan Asian Main Course Veg, Non-Veg, Mixed",
          images: [menuPage22, menuPage23],
        },
        { name: "Rice & Biryani", images: [menuPage25] },
      ],
    },
    {
      title: "Desserts & Yogurts",
      sub: [
        { name: "Desserts", images: [menuPage32] },
        { name: "Yogurts", images: [menuPage32] },
      ],
    },
  ];

  // 👉 Modal state
  const [isOpen, setIsOpen] = useState(false);

  // ...

  const [currentImages, setCurrentImages] = useState<StaticImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (images: StaticImageData[], index: number) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex items-center justify-center pt-32">
        <Image src={banner} alt="Menu" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Discover flavors crafted with passion — from appetizers to
            cocktails.
          </p>
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
        <div className="w-11/12 md:w-5/6 mx-auto">
          {categories.map((cat, cIdx) => {
            // collect all images from subcategories into one flat array
            const allImages = cat.sub.flatMap((s) => s.images);

            return (
              <div key={cIdx} className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">
                  {cat.title}
                </h2>

                {/* Grid layout for all images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openModal(allImages, idx)}
                      className="relative w-full h-[450px] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${cat.title} Page ${idx + 1}`}
                        fill
                        className="object-contain bg-white hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            ›
          </button>
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-[80vh]">
            <Image
              src={currentImages[currentIndex]}
              alt={`Menu Page ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
      <MobileContactBar />
    </div>
  );
}
