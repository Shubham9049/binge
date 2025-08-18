"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";
import aboutImage from "../../../assets/hero2.jpeg";

export default function OurJourney() {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Our Journey"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Journey</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            From a small kitchen to a beloved dining experience
          </p>

          {/* Scroll Down Indicator */}
          <div className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto">
            <span className="text-3xl">↓</span>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={aboutImage} // 🔹 Replace with your image
              alt="Our Story"
              fill
              className="object-cover  shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              What started as a small family kitchen has now become a place
              where flavors meet passion. From our humble beginnings, we have
              grown into a space that brings people together over delicious
              meals and warm hospitality.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Every dish we serve carries a piece of our journey – a blend of
              tradition, love, and innovation. For us, food isn’t just about
              taste, it’s about creating memories with every bite.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
