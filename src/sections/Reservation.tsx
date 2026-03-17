"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();

  const res = await fetch("/api/reservation", {
    method: "POST",
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
    toast.success("Reservation sent successfully!");
  } else {
    toast.error("Something went wrong. Please try again.");
  }
};

  return (
    <section id="reservation" className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Book a Table
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="p-4 rounded bg-gray-800 text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="p-4 rounded bg-gray-800 text-white outline-none"
            required
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="p-4 rounded bg-gray-800 text-white outline-none"
            required
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="p-4 rounded bg-gray-800 text-white outline-none"
            required
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
            className="p-4 rounded bg-gray-800 text-white outline-none"
            required
          />

          <button className="bg-orange-500 py-3 rounded hover:bg-orange-600 transition">
            Reserve Now
          </button>
        </motion.form>

      </div>
    </section>
  );
}