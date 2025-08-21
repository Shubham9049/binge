"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";
import hero2 from "../../../assets/hero2.jpeg";
import hero3 from "../../../assets/hero3.jpeg";
import hero4 from "../../../assets/hero4.jpeg";
import hero5 from "../../../assets/hero5.jpeg";
import { useRef } from "react";
import downwards from "../../../assets/downwards.png";

const team = [
  {
    name: "Maria Rossi",
    role: "Sous Chef",
    img: hero2,
  },
  {
    name: "Luca Bianchi",
    role: "Pastry Chef",
    img: hero3,
  },
  {
    name: "Elena Conti",
    role: "Grill Master",
    img: hero4,
  },
  {
    name: "Marco Ferri",
    role: "Sommelier",
    img: hero5,
  },
];

export default function MeetTheChef() {
  // Create a reference to the next section
  const headChefRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (headChefRef.current) {
      const yOffset = -50; // 👈 adjust gap from top (e.g., navbar height)
      const y =
        headChefRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center pt-32">
        <Image
          src={banner}
          alt="Meet the Chef"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Meet Our Chef & Team
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            The passion, creativity, and dedication behind every dish we serve.
          </p>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* HEAD CHEF SECTION */}
      <section
        ref={headChefRef}
        className="bg-[var(--secondary-color)] pt-12 pb-24 relative"
      >
        <div className="absolute bottom-0 left-0">
          <Image src={downwards} alt="downwards" />
        </div>
        <div className="w-11/12 md:w-5/6 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-full z-10">
            <div className="hidden md:block absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="hidden md:block absolute right-16 top-28 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] z-0"></div>
            <Image
              src={hero2}
              alt="headChef"
              width={600} // you can adjust based on actual image ratio
              height={400}
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl text-[var(--primary-color)] font-semibold mb-4">
              Meet Our Head Chef
            </h2>
            <h3 className="text-xl font-semibold text-gray-700  mb-4">
              Chef Alessandro Romano
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              With over 20 years of culinary expertise, Chef Alessandro brings
              authentic flavors from Italy with a modern twist. His philosophy
              is simple: fresh ingredients, bold flavors, and a touch of love in
              every dish.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Having worked in Michelin-starred restaurants, he now leads our
              kitchen with passion, creativity, and dedication to unforgettable
              dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className=" py-16 ">
        <div className="w-11/12 md:w-5/6 container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[var(--primary-color)] mb-4">
            Our Culinary Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Behind every dish is a passionate team dedicated to delivering an
            unforgettable dining experience.
          </p>
        </div>

        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((chef, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={chef.img}
                  alt={chef.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{chef.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
