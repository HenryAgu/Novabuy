import React from "react";
import ProductCard from "./product-card";
import { carouselProducts } from "@/components/data/products";

const ViewProductPage = () => {
  return (
    <main className="flex flex-col gap-y-8">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        PRODUCTS <span className="text-base font-normal ">(52 Products)</span>
      </p>
      <div className="grid grid-cols-3 gap-10">
        {carouselProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </main>
  );
};

export default ViewProductPage;
