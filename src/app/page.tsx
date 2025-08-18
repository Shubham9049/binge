"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DiningExperienceSection from "../../components/DineWithUs";
import About from "../../components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <About />
    </div>
  );
}
