const generateId = () =>
  typeof window !== "undefined" ? window.crypto.randomUUID() : "";

interface ShopBag {
  id: string;
  image: string;
  name: string;
  price: number;
  size: number;
}

export const shopBags: ShopBag[] = [
  {
    id: generateId(),
    image: "/images/shoe1.png",
    name: "NovaGlam Sneaker",
    price: 81500,
    size: 42,
  },
  {
    id: generateId(),
    image: "/images/shoe2.png",
    name: "UrbanFlex Runner",
    price: 72900,
    size: 44,
  },
  {
    id: generateId(),
    image: "/images/shoe3.png",
    name: "Classic Leather Loafer",
    price: 89900,
    size: 41,
  },
];
