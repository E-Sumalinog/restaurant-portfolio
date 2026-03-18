import { MenuItem } from "@/types/menu";

const menuItems: MenuItem[] = [
  {
    id: "grilled-steak",
    name: "Grilled Steak",
    price: 25,
    image: "/menu1.jpg",
    description: "Juicy grilled steak with herbs",
    category: "Main Course",
  },
  {
    id: "pasta-carbonara",
    name: "Pasta Carbonara",
    price: 18,
    image: "/menu2.jpg",
    description: "Creamy pasta with bacon and cheese",
    category: "Main Course",
  },
  {
    id: "fresh-salad",
    name: "Fresh Salad",
    price: 12,
    image: "/menu3.jpg",
    description: "Healthy greens with vinaigrette",
    category: "Appetizers",
  },
  {
    id: "chocolate-dessert",
    name: "Chocolate Dessert",
    price: 10,
    image: "/menu4.jpg",
    description: "Rich chocolate delight",
    category: "Desserts",
  },
];

export default menuItems;