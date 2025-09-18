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

const SpecialOffers = () => {
  return (
    <section className="lg:pl-24 lg:py-15 pl-5 py-8 flex flex-col gap-y-4 lg:gap-y-8">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        SPECIAL OFFERS
      </p>
      <div className="flex gap-x-2.5 overflow-x-auto no-scrollbar touch-scroll scroll-snap-x">
        {products.map((item, index) => (
          <div className="shrink-0 w-[350px] lg:w-[409px] scroll-snap-start" key={index}>
            <ProductCardItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
