"use client";
import { swiperProducts } from "@/components/data/products";
import ProductCardItem from "@/components/product-card-item";
import SideFilter from "@/components/side-filter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Rubik } from "next/font/google";
import React, { useState } from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const ShoePage = () => {
  const [renderedShoes, setRenderedShoes] = useState<number>(8);

  const renderMoreShoes = () => {
    setRenderedShoes((prev) => prev + 4);
  };
  return (
    <main className="lg:px-24 lg:py-8 px-5 py-8 overflow-x-hidden">
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
            <SheetTrigger className="cursor-pointer">Filter</SheetTrigger>
            <SideFilter />
          </Sheet>
          <span>|</span>
          <button>Sort by</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-12 my-5 lg:my-10">
        {swiperProducts.slice(0, renderedShoes).map((item) => (
          <ProductCardItem item={item} key={item.id} />
        ))}
      </div>
      {renderedShoes < swiperProducts.length && (
        <div className="flex justify-center">
          <Button
            className="text-base text-white font-normal bg-primary-500 p-5 rounded-[50px] cursor-pointer"
            onClick={renderMoreShoes}
          >
            Load More
          </Button>
        </div>
      )}
    </main>
  );
};

export default ShoePage;
