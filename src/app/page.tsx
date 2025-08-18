"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DiningExperienceSection from "../../components/DineWithUs";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <About />
      <Footer />
    </div>
  );
}
