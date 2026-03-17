"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Grilled Steak",
    price: "$25",
    image: "/menu1.jpg",
    description: "Juicy grilled steak with herbs",
  },
  {
    name: "Pasta Carbonara",
    price: "$18",
    image: "/menu2.jpg",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    name: "Fresh Salad",
    price: "$12",
    image: "/menu3.jpg",
    description: "Healthy greens with vinaigrette",
  },
  {
    name: "Chocolate Dessert",
    price: "$10",
    image: "/menu4.jpg",
    description: "Rich chocolate delight",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">Our Menu</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {item.description}
                </p>
                <span className="text-orange-400 font-bold">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}