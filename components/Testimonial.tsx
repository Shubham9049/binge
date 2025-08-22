"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import upwards from "../assets/upwards.png";
import downwards from "../assets/downwards.png";
import Image from "next/image";

interface Review {
  name: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "AARAV SHARMA",
    content:
      "Stellar Binge is hands down the best restaurant in Noida! The food was absolutely delicious, and the service was warm and welcoming. Perfect place for family dinners.",
    rating: 5,
  },
  {
    name: "PRIYA VERMA",
    content:
      "Loved the ambience here — cozy yet elegant. The staff was very polite and attentive, and the food was fresh with authentic flavors. Will definitely be coming back!",
    rating: 5,
  },
  {
    name: "RAHUL SINGH",
    content:
      "As a foodie, I’m very picky about taste, but Stellar Binge exceeded all my expectations. The variety on the menu and the presentation of dishes were excellent.",
    rating: 5,
  },
  {
    name: "ANANYA GUPTA",
    content:
      "Celebrated my birthday here, and it was a wonderful experience. The hospitality was amazing, the staff even arranged a small surprise dessert for me. Highly recommended!",
    rating: 5,
  },
  {
    name: "ROHAN MALHOTRA",
    content:
      "A must-visit spot in Noida if you’re looking for great food and a relaxing atmosphere. The service was quick, and every dish we tried was perfectly cooked.",
    rating: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className="w-full py-16  font-raleway bg-[var(--secondary-color)] text-black relative">
      <div className="absolute top-0 left-0">
        <Image src={upwards} alt="upwards" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={downwards} alt="downwards" />
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Section Label */}
        <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold text-start">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-black mt-2 text-start mb-4">
          From Our <span className="text-[var(--primary-color)]">Kitchen</span>{" "}
          to Their
          <span className="text-[var(--primary-color)]"> Hearts</span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 shadow-md h-80 flex flex-col justify-between hover:shadow-lg transition duration-300">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[var(--primary-color)] text-2xl opacity-40" />

                {/* Review Content (truncate if too long) */}
                <p className="text-base leading-relaxed text-black line-clamp-4">
                  {review.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                      {review.name}
                    </h3>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[var(--primary-color)] text-sm mr-1"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center text-sm font-bold uppercase">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
