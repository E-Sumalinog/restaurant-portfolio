"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing food and excellent service! Highly recommended.",
  },
  {
    name: "Sarah Smith",
    review: "A wonderful dining experience with a beautiful atmosphere.",
  },
  {
    name: "Michael Lee",
    review: "Best restaurant in town! The dishes are absolutely delicious.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          What Our Customers Say
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Stars */}
              <div className="text-orange-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-4">
                "{item.review}"
              </p>

              {/* Name */}
              <h4 className="font-semibold text-gray-900">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}