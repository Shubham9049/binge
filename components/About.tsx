import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Hero1 from "../assets/hero1.jpeg";
import upwards from "../assets/upwards.png";
import downwards from "../assets/downwards.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className="relative bg-[var(--secondary-color)] text-black font-raleway font-light  overflow-hidden pb-12">
      <div className="absolute top-0 left-0">
        <Image src={upwards} alt="upwards" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={downwards} alt="downwards" />
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto  py-10 ">
        {/* Heading */}
        <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <p className="uppercase tracking-widest font-semibold mt-2 text-xs text-white">
              Our Story
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mt-2">
              Binge — Redefining The Art Of Dining
            </h2>
          </div>
        </div>

        {/* Image and Text Block */}
        <div className="relative flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative md:w-1/2 w-full z-10">
            <Image
              src={Hero1}
              alt="Binge Restaurant"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div
            className="md:w-1/2 w-full bg-white p-6 md:p-12 flex flex-col justify-center z-10"
            data-aos="fade-up"
          >
            <h3 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mb-4 relative">
              The Binge Experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-6">
              Binge was born from a simple idea — to create a place where food,
              flavor, and experience come together seamlessly. Every plate tells
              a story, crafted with fresh ingredients, bold creativity, and a
              deep respect for culinary traditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At Binge, we believe dining is more than just a meal — it’s an
              experience. From the warm ambience and inviting design, to the
              chef’s signature creations, every detail is thoughtfully curated
              to make your visit memorable.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you’re joining us for a casual evening or a special
              celebration, our focus is on creating moments that linger — long
              after the last bite.
            </p>
            <Link
              href="https://www.zomato.com/ncr/stellar-binge-sector-62-noida"
              target="blank"
            >
              <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 mt-10 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden cursor-pointer">
                <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                  Reserve Your Table <ArrowRight size={16} />
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundColor: "#B10203" }}
                ></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Dotted pattern (bottom right) */}
        <div className="hidden md:block absolute bottom-6 right-20 w-52 h-52 bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] opacity-80 pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default About;
