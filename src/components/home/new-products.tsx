import React from "react";
import { ProductCard } from "../types";
import ProductCardItem from "../product-card-item";

const products: ProductCard[] = [
  {
    name: "men",
    image: "/images/item4.png",
    link: "",
    price: 140500,
  },
  {
    name: "women",
    image: "/images/item5.png",
    link: "",
    price: 140500,
  },
    {
    name: "men",
    image: "/images/item4.png",
    link: "",
    price: 140500,
  },
  {
    name: "women",
    image: "/images/item5.png",
    link: "",
    price: 140500,
  },
  {
    name: "Kids",
    image: "/images/item6.png",
    link: "",
    price: 140500,
  },
  {
    name: "men",
    image: "/images/item3.png",
    link: "",
    price: 140500,
  },
  {
    name: "women",
    image: "/images/item5.png",
    link: "",
    price: 140500,
  },
  {
    name: "Kids",
    image: "/images/item4.png",
    link: "",
    price: 140500,
  },
];

const NewProducts = () => {
  return (
    <section className="lg:pl-24 lg:py-15 px-5 py-5 flex flex-col gap-y-8">
      <p className="text-black font-bold text-[26px] leading-[150%]">
        NEW PRODUCTS
      </p>
      <div className="flex gap-x-2.5 overflow-x-auto no-scrollbar touch-scroll scroll-snap-x">
        {products.map((item, index) => (
          <div className="shrink-0 w-[409px] scroll-snap-start" key={index}>
            <ProductCardItem item={item}  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
