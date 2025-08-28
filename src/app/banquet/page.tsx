// app/banquet/page.tsx
"use client";

import Image from "next/image";
import banquetHero from "../../../assets/banqutes/img1.webp"; // replace with your hero image
import { banquetImages } from "../../../src/data/data"; // import your banquet/gallery images
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function BanquetPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-white text-black font-raleway mt-28">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] flex items-center justify-center">
          <Image
            src={banquetHero}
            alt="Banquet Hall"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Gather & Celebrate
            </h1>
            <p className="mt-3 text-lg md:text-xl">
              The Ideal Space for Your Corporate Meets & Cozy Get-Togethers
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-11/12 md:w-4/5 mx-auto py-16 leading-relaxed text-gray-700 space-y-6">
          <i className="font-semibold">
            Host Your Special Moments at{" "}
            <span className="font-semibold">Stellar Binge</span>
          </i>

          <p>
            Looking for the perfect venue for an intimate celebration? Stellar
            Binge offers an elegant space exclusively designed for smaller,
            private gatherings whether it’s a birthday party, kitty party,
            corporate meet, or a cozy family get-together.
          </p>

          <p>
            Our chic and stylish banquet hall comfortably accommodates up to 150
            guests , making it the ideal choice for those who value personalized
            service and premium ambience. <br /> The space comes with spacious
            seating arrangements, impeccable décor, and a curated menu to
            suit your occasion.
          </p>

          <h3 className="font-semibold">
            Why Choose Stellar Binge for Your Event?
          </h3>
          <ul>
            <li>
              <span className="font-semibold">Prime Location</span>–
              Conveniently located in Sector 62, Noida, easy to access from all
              parts of the city
            </li>
            <li>
              <span className="font-semibold">Perfect Size </span>– Ideal for
              small corporate events, social gatherings, kitty parties &
              birthdays
            </li>
            <li>
              <span className="font-semibold">Lavish Food Spreads</span>–
              Multi-cuisine options featuring Indian, Chinese, and Continental
              delicacies
            </li>
            <li>
              <span className="font-semibold">Elegant Ambience</span> – Modern
              interiors with flexible seating arrangements
            </li>
            <li>
              <span className="font-semibold">Ample Parking</span> – Hassle-free
              experience for all your guests
            </li>
            <li>
              <span className="font-semibold">Complete Event Support</span>–
              Audio-visual setup available on request
            </li>
          </ul>

          <p>
            <b>Dining at Binge Restaurant & Lounge</b>: Located right in Noida
            city, Binge Restaurant & Lounge Bar offers a multi-cuisine dining
            experience with lavish buffet spreads, à la carte selections, and a
            chic atmosphere. It’s the perfect spot for celebratory meals,
            informal meetings, or pre/post-event gatherings.
          </p>

          <p>
            <b>Elegant Spaces for Conferences & Celebrations</b>: For meetings
            and events that leave an enduring impression, Binge has a
            distinctive allure. We bring to every event a dedicated focus and
            unbridled enthusiasm. Whether you&#39;re planning a company strategy
            session, a corporate cocktail party or a celebratory banquet, you
            always have our undivided attention. The Conference & Banquet rooms
            can accommodate upto 150 guests and offers distinctive and flexible
            spaces. A wide range of state-of-the-art audio-visual equipment is
            available on extra charges.
          </p>
          <p>
            <b>The Lounge Bar</b>: Our stylish lounge bar serves an exquisite
            range of whiskies, cognacs, cocktails, and premium spirits, with
            Happy Hours from 12 noon to 10:30 pm. A perfect addition to your
            event for an unforgettable experience.
          </p>

          <p className="">
            <b>Contact Us</b>:{" "}
            <Link className="hover:text-blue-600" href="tel:+919599816863">
              9599816863
            </Link>
            /{" "}
            <Link className="hover:text-blue-600" href="tel:+919599816618">
              9599816618
            </Link>{" "}
            /{" "}
            <Link className="hover:text-blue-600" href="tel:+919599816866">
              9599816866
            </Link>
          </p>
        </section>

        {/* Image Gallery Section */}
        <section className="w-11/12 md:w-4/5 mx-auto pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Our Banquet Venues & Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {banquetImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={350}
                  className="object-cover w-full h-[250px]"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
