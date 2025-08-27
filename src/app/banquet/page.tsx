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
              Banquet & Celebrations
            </h1>
            <p className="mt-3 text-lg md:text-xl">
              Stellar Binge - A perfect venue for hosting your Wedding /
              Reception:
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-11/12 md:w-4/5 mx-auto py-16 leading-relaxed text-gray-700 space-y-6">
          <p>
            At <span className="font-semibold">Stellar Binge</span> is a great
            place to host your special day - be it an engagement, a wedding or
            any other social function. Rolling lawns, large indoor venues
            including lavish food spreads and spacious seating arrangements,
            with ample parking, all combine and contribute to making your
            special event truly memorable. Our lawns can comfortably accommodate
            2000 guests and the Banquet Halls can easily cater to functions of
            upto 700 guests.
          </p>

          <p>
            At Stellar Binge, we endeavor collectively to set new standards in
            the field of gastronomy matched with impeccable service.
          </p>

          <p>
            We also undertake Outdoor Catering for 100 to 2000 guests for your
            special occasion at your preferred location in Noida.
          </p>

          <p>
            <b>Dining</b>: Far away from the hustle & bustle of the city. Binge
            Restaurant & Lounge Bar is one of it&#39;s kind & offers services
            set in a lavish & chic ambience, The multi-cuisine restaurant is an
            ideal place for discerning diners & specializes in Indian, Chinese
            and Continental cuisine. It offers a blend of delectable food &
            excellent service and boasts of beautiful interiors & a relaxed
            ambience. Apart from a wide range of a-la-carte menu, it offers a
            lavish buffet spread for a quick meal with colleagues & friends.
          </p>

          <p>
            <b>Conferences & Banquets</b>: For meetings and events that leave an
            enduring impression, Binge has a distinctive allure. We bring to
            every event a dedicated focus and unbridled enthusiasm. Whether
            you&#39;re planning a company strategy session, a corporate cocktail
            party or a celebratory banquet, you always have our undivided
            attention. The Conference & Banquet rooms can accommodate upto 150
            guests and offers distinctive and flexible spaces. A wide range of
            state-of-the-art audio-visual equipment is available on extra
            charges.
          </p>
          <p>
            <b>Lounge Bar</b>: Operational from 12 noon till 11 pm! Binge offers
            a wide array of drinks & lip smacking cocktails in its Chic bar
            offering a splendid evening. It has the finest and rarest collection
            of whiskies, cognacs, single malts, beers and a selection of
            cocktail mixes. It also runs Happy Hours offers from 12 noon till
            10.30 pm. Binge Restaurant & Lounge Bar is more than a pit stop for
            its discerning guests.
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
