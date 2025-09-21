"use client";
import ProductCardItem from "@/components/product-card-item";
import { ProductCard } from "@/components/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Rubik } from "next/font/google";
import React, { useState } from "react";

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
  const [renderedShoes, setRenderedShoes] = useState<number>(4);

  const renderMoreShoes = () => {
    setRenderedShoes((prev) => prev + 4);
  };
  return (
    <main className="lg:px-24 lg:py-8 px-5 py-8 ">
      <div className="flex items-center justify-between">
        <span className="text-neutral-600 font-bold text-lg lg:text-[26px] lg:leading-[150%]">
          Shoes
          <span className={`${rubik.className} text-base font-normal`}>
            {" "}
            ({swiperProducts.length} Products)
          </span>
        </span>
        <div className="flex items-center gap-x-5.5">
          <Sheet>
            <SheetTrigger>Filter</SheetTrigger>
            <SheetContent>Test</SheetContent>
          </Sheet>
          <span>|</span>
          <button>Sort by</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-12 my-5 lg:my-10">
        {swiperProducts.slice(0, renderedShoes).map((item, index) => (
          <ProductCardItem item={item} key={index} />
        ))}
      </div>
      {renderedShoes < swiperProducts.length && (
        <div className="flex justify-center">
          <button
            className="text-base text-white font-normal bg-primary-500 py-2.5 px-5 rounded-[50px] cursor-pointer"
            onClick={renderMoreShoes}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default ShoePage;
