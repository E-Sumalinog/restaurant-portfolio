import { useState, useEffect } from "react";
import { MenuItem } from "@/types/menu";

type Props = {
  item?: MenuItem;
  onClose: () => void;
  onSave: (item: MenuItem) => void;
};

export default function MenuModal({ item, onClose, onSave }: Props) {
    const [form, setForm] = useState<MenuItem>({
    id: item?.id || Date.now().toString(),
    name: item?.name || "",
    description: item?.description || "",
    price: item?.price || 0,
    image: item?.image || "",
    category: item?.category || "",
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setForm((prev) => ({
        ...prev,
        image: imageUrl,
    }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: name === "price" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(form);
        onClose();
    };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-2xl w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold">{item ? "Edit" : "Add"} Menu Item</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image path"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="text-white"
        />
        {form.image && (
            <img
                src={form.image}
                alt="Preview"
                className="w-full h-40 object-cover rounded"
            />
        )}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}