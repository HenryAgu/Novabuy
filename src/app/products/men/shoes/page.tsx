import ProductCardItem from "@/components/product-card-item";
import { ProductCard } from "@/components/types";
import { Rubik } from "next/font/google";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const swiperProducts: ProductCard[] = [
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
];

const ShoePage = () => {
  return (
    <main className="lg:px-24 lg:py-8 px-5 py-8 ">
      <div className="flex items-center justify-between">
        <span className="text-neutral-600 font-bold text-lg lg:text-[26px] lg:leading-[150%]">
          Shoes
          <span className={`${rubik.className} text-base font-normal`}>
            {" "}
            (52 Products)
          </span>
        </span>
        <div className="flex items-center gap-x-5.5">
          <button>Filter</button>
          <span>|</span>
          <button>Sort by</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-12 my-5 lg:my-10">
        {swiperProducts.map((item, index) => (
          <ProductCardItem item={item} key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-base text-white font-normal bg-primary-500 p-2.5 rounded-[50px]">Load More</button>
      </div>
    </main>
  );
};

export default ShoePage;
