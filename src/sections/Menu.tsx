"use client";

import { motion } from "framer-motion";
import menuItems from "@/data/menu";
import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { useMenu } from "@/context/MenuContext";

export default function Menu() {
    const { menu } = useMenu();
    const categories = ["All", ...new Set(menuItems.map(item => item.category))];
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const filteredItems = menuItems.filter(item => activeCategory === "All" ? 
    true : item.category === activeCategory).filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    

  return (
    <section id="menu" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">Our Menu</h2>
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border transition ${
                    activeCategory === category
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
                >
                {category}
                </button>
            ))}
        </div>
        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}