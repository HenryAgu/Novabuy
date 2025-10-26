import React from "react";
import ProductCardItem from "../product-card-item";
import { useProducts } from "../context/products-context";

interface SwiperProductsProps{
  title: string;
}

const SwiperProducts = ({title}:SwiperProductsProps) => {
  const {products} = useProducts();
  return (
    <section className="lg:pl-24 lg:py-15 pl-5 py-8 flex flex-col gap-y-4 lg:gap-y-8">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        {title}
      </p>
      <div className="flex gap-x-2.5 overflow-x-auto no-scrollbar touch-scroll scroll-snap-x">
        {products?.map((item, index) => (
          <div className="shrink-0 w-[350px] lg:w-[409px] scroll-snap-start" key={index}>
            <ProductCardItem item={item}  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SwiperProducts;
