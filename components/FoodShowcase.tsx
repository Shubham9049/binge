"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Added Autoplay
import "swiper/css";
import "swiper/css/navigation";
import Image, { StaticImageData } from "next/image";

import img1 from "../assets/food/Chilli Chicken Dry.webp";
import img2 from "../assets/food/Chilli Fish.webp";
import img3 from "../assets/food/Crispy Babycorn.webp";
import img4 from "../assets/food/Crispy Corns.webp";
import img5 from "../assets/food/Hara Bhara Kebab  - Copy.webp";
import img6 from "../assets/food/Makhmali seekh kebab.webp";
import img7 from "../assets/food/Murg Banno Kebab.webp";
import img8 from "../assets/food/Murgh Malai Kebab.webp";
import img9 from "../assets/food/Mutton Galouti.webp";
import img10 from "../assets/food/Non-Veg Kebab Paltter.webp";
import img11 from "../assets/food/Tandoori Chicken.webp";
import img12 from "../assets/food/Veg Manchurian Dry.webp";

const foodImages: { src: StaticImageData; title: string }[] = [
  { src: img1, title: "Chilli Chicken Dry 🌶️🍗" },
  { src: img2, title: "Chilli Fish 🌶️🐟" },
  { src: img3, title: "Crispy Babycorn 🥦" },
  { src: img4, title: "Crispy Corns 🥦" },
  { src: img5, title: "Hara Bhara Kebab 🥦" },
  { src: img6, title: "Makhmali Seekh Kebab 🍗" },
  { src: img7, title: "Murg Banno Kebab 🍗" },
  { src: img8, title: "Murgh Malai Kebab 🍗" },
  { src: img9, title: "Mutton Galouti 🍖" },
  { src: img10, title: "Non-Veg Kebab Platter 🍗🍖" },
  { src: img11, title: "Tandoori Chicken 🍗" },
  { src: img12, title: "Veg Manchurian Dry 🥦" },
];

export default function SpringSlider() {
  return (
    <section className="w-11/12 md:w-5/6 mx-auto py-12">
      <Swiper
        modules={[Navigation, Autoplay]} // ✅ enable autoplay
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        navigation={false}
        autoplay={{
          delay: 2500, // ⏱️ time in ms between slides
          disableOnInteraction: false, // ✅ keep autoplay after user swipe
        }}
        speed={1200} // smooth transition
        className="w-full mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {foodImages.map((item, i) => (
          <SwiperSlide key={i} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={350}
              className="rounded-md shadow-md w-full h-[350px] object-cover"
            />
            <p className="mt-3 text-lg font-semibold text-gray-800 text-center">
              {item.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
