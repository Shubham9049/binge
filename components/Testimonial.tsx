"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Review {
  name: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "OMAR KHAN",
    content:
      "Thanks to Mondus Properties, I sold my villa quickly and at a great price. Their real estate agents are professional and always available to...",
    rating: 5,
  },
  {
    name: "ELENA PETROVA",
    content:
      "I was worried about finding the right buyer for my property. But Mondus Properties made the whole process transparent and stress-free. Their...",
    rating: 5,
  },
  {
    name: "RAJIV MEHTA",
    content:
      "As a first-time buyer in Dubai, I was overwhelmed with choices. Mondus Properties helped me find the perfect apartment that I could dream of...",
    rating: 5,
  },
  {
    name: "ELENA PETROVA",
    content:
      "I was worried about finding the right buyer for my property. But Mondus Properties made the whole process transparent and stress-free. Their...",
    rating: 5,
  },
  {
    name: "RAJIV MEHTA",
    content:
      "As a first-time buyer in Dubai, I was overwhelmed with choices. Mondus Properties helped me find the perfect apartment that I could dream of...",
    rating: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className="w-full py-16  font-raleway bg-[var(--secondary-color)] text-black">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Section Label */}
        <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold text-start">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-black mt-2 text-start mb-4">
          What Our Guests{" "}
          <span className="text-[var(--primary-color)]">Are Saying</span>
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
              <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 shadow-md h-full flex flex-col justify-between hover:shadow-lg transition duration-300">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[var(--primary-color)] text-2xl opacity-40 mb-4" />

                {/* Review Content */}
                <p className="text-base leading-relaxed mb-6 text-black">
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
