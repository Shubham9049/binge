"use client";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DiningExperienceSection from "../../components/DineWithUs";
import About from "../../components/About";
import Footer from "../../components/Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";
import hero4 from "../../assets/hero4.jpeg";
import hero5 from "../../assets/hero5.jpeg";

const fundamentals = [
  { poster: hero1 },
  { poster: hero2 },
  { poster: hero3 },
  { poster: hero4 },
  { poster: hero5 },
  { poster: hero1 },
  { poster: hero2 },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <About />

      {/* Section */}
      <section className="bg-white dark:bg-black font-raleway font-light dark:font-thin">
        <div className="w-11/12 mx-auto px-3 md:px-8 py-10">
          <p className="text-gray-700 dark:text-gray-300 text-xs tracking-widest mt-1 uppercase font-semibold">
            NC Capital
          </p>

          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
              Fern Hospitality <br /> expansion plan for the upcoming <br />{" "}
              year
            </h2>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
            {fundamentals.map((location, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm bg-cover bg-center h-96 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
                style={{ backgroundImage: `url(${location.poster.src})` }} // ✅ fix
                data-aos="zoom-in"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
