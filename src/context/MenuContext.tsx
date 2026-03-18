"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { MenuItem } from "@/types/menu";
import menuData from "@/data/menu";

type MenuContextType = {
  menu: MenuItem[];
  setMenu: Dispatch<SetStateAction<MenuItem[]>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<MenuItem[]>(menuData);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used inside MenuProvider");
  return context;
}