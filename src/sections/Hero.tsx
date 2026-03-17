"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white relative">
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-6">Fine Dining Experience</h1>
        <p className="text-lg max-w-xl mb-8 text-gray-200">
          Discover the taste of authentic cuisine crafted by our master chefs.
        </p>
        <button className="bg-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 transition">
          Book a Table
        </button>
      </motion.div>
    </section>
  );
}