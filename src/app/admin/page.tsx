"use client";

import { useState } from "react";
import { MenuItem } from "@/types/menu";
import AdminMenuCard from "@/components/AdminMenuCard";
import MenuModal from "@/components/MenuModal";
import { useMenu } from "@/context/MenuContext";

export default function AdminDashboard() {
  const { menu, setMenu } = useMenu();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | undefined>();

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditingItem(undefined);
    setModalOpen(true);
  };

  const handleSave = (item: MenuItem) => {
    if (editingItem) {
      setMenu((prev) =>
        prev.map((i) => (i.id === item.id ? item : i))
      );
    } else {
      setMenu((prev) => [...prev, item]);
    }
  };

  return (
    <>
      {modalOpen && (
        <MenuModal
          item={editingItem}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}

      <main className="p-8 bg-gray-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <button
          onClick={handleAdd}
          className="mb-6 px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white"
        >
          + Add Menu Item
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <AdminMenuCard
              key={item.id}
              item={item}
              onDelete={(id) =>
                setMenu((prev) => prev.filter((i) => i.id !== id))
              }
              onEdit={handleEdit}
            />
          ))}
        </div>
      </main>
    </>
  );
}