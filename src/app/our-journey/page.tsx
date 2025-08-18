"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.jpeg";
import aboutImage from "../../../assets/hero2.jpeg";
import foodImage from "../../../assets/hero2.jpeg";
const points = [
  {
    title: "Fresh Ingredients",
    desc: "We source farm-fresh produce and the finest spices to serve you quality in every bite.",
    icon: "🥗",
  },
  {
    title: "Authentic Recipes",
    desc: "Passed down through generations, our recipes bring true traditional flavors to your table.",
    icon: "🍲",
  },
  {
    title: "Cozy Ambience",
    desc: "A warm and inviting atmosphere perfect for family dinners, friendly gatherings, or date nights.",
    icon: "🍷",
  },
  {
    title: "Exceptional Service",
    desc: "Our team ensures every guest feels like family, with service that’s warm and attentive.",
    icon: "🤝",
  },
];

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

      <section className=" py-16">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-full z-10">
            <div className="absolute top-10 right-6 w-full h-full bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-44 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[#eaf3f7] dark:bg-gray-900 z-0"></div>
            <Image
              src={aboutImage}
              alt="our story"
              width={600} // you can adjust based on actual image ratio
              height={400}
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
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
      <section className="py-16  ">
        <div className="w-11/12 md:w-5/6 mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Culinary Philosophy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At our restaurant, food is not just about taste — it’s about
              passion, freshness, and authenticity. We believe in sourcing the
              finest local ingredients and crafting every dish with love, care,
              and tradition.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 ">
                  🌱 Fresh Ingredients
                </h4>
                <p className="text-gray-600  text-sm">
                  Handpicked from local farmers and markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  👨‍🍳 Crafted with Love
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Every dish tells a story of our passion for food.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative w-full h-full z-10">
            <div className="absolute top-10 right-6 w-full h-full bg-[radial-gradient(#ccc_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-44 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[#eaf3f7] dark:bg-gray-900 z-0"></div>
            <Image
              src={foodImage}
              alt="foodImage"
              width={600} // you can adjust based on actual image ratio
              height={400}
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="w-11/12 md:w-5/6 mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Us Special
          </h2>
          <p className="text-gray-600 mb-12">
            Discover what makes us the favorite choice for food lovers in town.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {points.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
