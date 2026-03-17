"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/about-restaurant.jpg"
          alt="Chef cooking"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Story
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          At Savory, we believe in the art of fine dining crafted with passion and
          the freshest ingredients. Our chefs bring authentic flavors from around the world to your plate.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Farm-to-table ingredients</li>
          <li>Elegant dining atmosphere</li>
          <li>Award-winning chefs</li>
        </ul>
      </motion.div>
    </section>
  );
}