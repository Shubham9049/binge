"use client";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { MdDeliveryDining, MdOutlineLocalDining } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";
import contactBanner from "../../../assets/hero5.jpeg";
import { useRef, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("form triggered");
  };

  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToNext = () => {
    if (contactRef.current) {
      const yOffset = -50; // 👈 adjust gap from top (e.g., navbar height)
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[var(--secondary-color)] text-black  transition-colors">
      <Navbar />

      <section className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={contactBanner}
          alt="Contact page"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            We&#39;d love to hear from you! Reach out with questions, feedback,
            or reservation inquiries.
          </p>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        ref={contactRef}
        className="w-11/12 md:w-5/6 mx-auto py-16 grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--primary-color)]">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Reach out to us for any queries, bookings, or collaborations.
          </p>

          {/* Services */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <MdOutlineLocalDining className="text-[var(--primary-color)] text-xl" />
              <span>Dine-in</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <RiTakeawayFill className="text-[var(--primary-color)] text-xl" />
              <span>Takeaway</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <MdDeliveryDining className="text-[var(--primary-color)] text-xl" />
              <span>No-contact Delivery</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-[var(--primary-color)]" />
            <span>
              STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area,
              <br /> Sector 62, Noida, Uttar Pradesh 201307
              <br />
              <span className="text-sm text-gray-500">
                Floor G · Stellar IT Park
              </span>
            </span>
          </div>

          {/* Email */}
          {/* <p className="flex items-center gap-3">
            <FaEnvelope className="text-[var(--primary-color)]" />
            info@integratedlognet.com
          </p> */}

          {/* Phone */}
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-[var(--primary-color)]" />
            +91 95998 16865
          </p>

          {/* Hours */}
          <p className="flex items-center gap-3">
            <FaClock className="text-[var(--primary-color)]" />
            Open ⋅ Closes 11 pm
          </p>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-lg border dark:border-white/10"
        >
          {successMsg && (
            <p className="text-green-600 font-medium">{successMsg}</p>
          )}
          {errorMsg && <p className="text-red-600 font-medium">{errorMsg}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--primary-color)] text-white px-6 py-3  hover:rounded-xl transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
