export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  specs: {
    case: string;
    strap: string;
    material: string;
    water: string;
  };
  colors: string[];
}

export const BRAND_NAME = "VANTAGE";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Noir Élite Automatic",
    category: "Men",
    price: 450,
    oldPrice: 550,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop",
    description: "A statement of power and precision. Designed for men who command attention without saying a word.",
    specs: {
      case: "40 mm",
      strap: "22 cm length | 20 mm width",
      material: "Stainless steel case, sapphire-coated glass, automatic movement",
      water: "50 m"
    },
    colors: ["Midnight Black", "Gunmetal Grey", "Champagne Gold"]
  },
  {
    id: 2,
    name: "Velora Rose Gold Luxe",
    category: "Women",
    price: 320,
    oldPrice: 420,
    image: "https://images.unsplash.com/photo-1513116476489-76db172560a6?q=80&w=1000&auto=format&fit=crop",
    description: "Refined, feminine, and irresistibly elegant. A watch that complements confidence.",
    specs: {
      case: "34 mm",
      strap: "20 cm length | 16 mm width",
      material: "Rose-gold plated alloy, mineral glass, quartz movement",
      water: "30 m"
    },
    colors: ["Rose Gold", "Ivory White", "Nude Blush"]
  },
  {
    id: 3,
    name: "Obsidian Skeleton Chronograph",
    category: "Men",
    price: 580,
    oldPrice: 750,
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1000&auto=format&fit=crop",
    description: "Bold mechanics revealed beneath luxury design. Crafted for unapologetic strength.",
    specs: {
      case: "42 mm",
      strap: "23 cm length | 22 mm width",
      material: "Stainless steel, skeleton dial, quartz chronograph",
      water: "100 m"
    },
    colors: ["Obsidian Black", "Steel Silver", "Deep Bronze"]
  },
  {
    id: 4,
    name: "Silqra Minimal Diamond",
    category: "Women",
    price: 290,
    oldPrice: 350,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop",
    description: "Minimal elegance with a subtle shine. Designed for everyday luxury.",
    specs: {
      case: "32 mm",
      strap: "19 cm length | 14 mm width",
      material: "Stainless steel mesh strap, crystal-studded dial",
      water: "30 m"
    },
    colors: ["Soft Gold", "Pearl White", "Matte Black"]
  }
];

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  { id: 1, name: "Aarav M.", text: "The Noir Élite is simply stunning. Heavy, premium feel.", rating: 5 },
  { id: 2, name: "Elena S.", text: "Velora is my daily driver now. Compliments everywhere.", rating: 5 },
  { id: 3, name: "James Bond (Verified)", text: "Precision engineering at its finest.", rating: 5 }
];
