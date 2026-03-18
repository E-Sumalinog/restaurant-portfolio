import Image from "next/image";
import { MenuItem } from "@/types/menu";
import { motion } from "framer-motion";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />

        {/* Optional badge */}
        {item.category && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
            {item.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{item.description}</p>
        <p className="font-bold text-orange-400">${item.price}</p>
      </div>
    </motion.div>
  );
}