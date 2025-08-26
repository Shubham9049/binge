// app/banquet/page.tsx
"use client";

import Image from "next/image";
import banquetHero from "../../../assets/banqutes/img1.webp"; // replace with your hero image
import { banquetImages } from "../../../src/data/data"; // import your banquet/gallery images
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function BanquetPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-white text-black font-raleway mt-28">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center">
          <Image
            src={banquetHero}
            alt="Banquet Hall"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Banquet & Celebrations
            </h1>
            <p className="mt-3 text-lg md:text-xl">
              Celebrate life’s special moments in style
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-11/12 md:w-4/5 mx-auto py-16 leading-relaxed text-gray-700 space-y-6">
          <p>
            At <span className="font-semibold">The Stellar Gymkhana</span> life
            is a celebration! Whether a destination wedding where one plus one
            are made ONE or a private birthday bash celebrating togetherness or
            just a kitty party, the lavish food spreads and spacious seating
            arrangements make The Stellar Gymkhana a perfect joy for hosting all
            types of events. Our rolling lawns can comfortably accommodate 2500
            guests, while our large indoor venues – the Banquet Halls – can
            easily cater to social functions for up to 500 persons making it one
            of the best & a premium venue for destination Wedding in
            Noida/Greater Noida-NCR.
          </p>

          <p>
            Entertain in style at our lake-facing premium lawns suitable for
            most banquet functions, including theme dinners. We offer a lavish
            choice of cuisines – Indian, Tandoori, Continental, Mughlai and
            Chinese – prepared in-house by our proficient Chefs offering you an
            excellent fare for your palate.
          </p>

          <p>
            Whether your event is for 500 or 2500, we assure you of unmatched
            quality in our offerings and services. We take charge and work
            closely with event planners to provide any service, entertainment or
            otherwise that our guests require for their special events.
          </p>

          <p>
            Rolling lawns, large indoor and outdoor venues and ample parking not
            to mention the peace and tranquility all combine and contribute to
            making the simplest of your functions truly memorable.
          </p>

          <p>
            The Stellar Gymkhana is considered to be one of the best venues for
            Social Functions & Weddings in Delhi NCR with a choice of outdoor
            venues in Noida/Greater Noida and is located amidst the vast open
            space of Greater Noida far from the maddening cacophony of city
            crowds. It is a perfect venue for luxury destination wedding in NCR
            and other private events.
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
