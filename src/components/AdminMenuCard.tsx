import Image from "next/image";
import { MenuItem } from "@/types/menu";

type Props = {
  item: MenuItem;
  onDelete: (id: string) => void;
  onEdit: (item: MenuItem) => void;
};

export default function AdminMenuCard({ item, onDelete, onEdit }: Props) {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md p-4 flex flex-col">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-gray-400 text-sm">{item.description}</p>
      <p className="font-bold text-orange-400 mt-1">${item.price}</p>

      <div className="mt-auto flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}