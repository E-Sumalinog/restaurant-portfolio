"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="text-gray-300 mb-6">
            Visit us for a memorable dining experience or reach out to reserve your table.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 123 Main Street, Cebu City</p>
            <p>📞 +63 912 345 6789</p>
            <p>📧 contact@savory.com</p>
          </div>
        </motion.div>

        {/* Right Side - Map */}
        <motion.div
          className="w-full h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=cebu%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}