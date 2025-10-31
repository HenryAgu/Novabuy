"use client";
import ProductCardItem from "@/components/product-card-item";
import SideFilter from "@/components/side-filter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Rubik } from "next/font/google";
import React, { useState } from "react";
import { useProducts } from "@/components/context/products-context";
import ProductsPageSkeleton from "@/components/products/products-page-skeleton";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const AccessoriesPage = () => {
  const [renderedAccessories, setRenderedAccessories] = useState<number>(8);
  const { products, loading } = useProducts();

  // Filter products for shoes category
  const accessories = products.filter((p) => p.category === "accessories");

  const renderMoreShoes = () => {
    setRenderedAccessories((prev) => prev + 4);
  };

  if (loading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <main className="lg:px-24 lg:py-8 px-5 py-8 overflow-x-hidden min-h-screen">
      <div className="flex items-center justify-between">
        <span className="text-neutral-600 font-bold text-lg lg:text-[26px] lg:leading-[150%]">
          Accessories
          <span className={`${rubik.className} text-base font-normal`}>
            {" "}
            ({accessories?.length} Products)
          </span>
        </span>
        <div className="flex items-center gap-x-1.5 lg:gap-x-5.5">
          <Sheet>
            <SheetTrigger className="cursor-pointer">Filter</SheetTrigger>
            <SideFilter />
          </Sheet>
          <span>|</span>
          <button>Sort by</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-12 my-5 lg:my-10">
        {accessories.slice(0, renderedAccessories).map((item) => (
          <ProductCardItem
            item={{
              id: item.id,
              name: item.name,
              image: item.image,
              link: `/products/${item.id}`,
              price: item.price,
            }}
            key={item.id}
          />
        ))}
      </div>
      {renderedAccessories < accessories?.length && (
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

export default AccessoriesPage;
