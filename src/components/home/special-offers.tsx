import React from "react";
import ProductCardItem from "../product-card-item";
import { useProducts } from "../context/products-context";

const SpecialOffers = () => {
  const { products } = useProducts();
  
  // Filter products for special offers (products over 50k)
  const specialOffers = products.filter(p => p.price > 50000);

  return (
    <section className="lg:pl-24 lg:py-15 pl-5 py-8 flex flex-col gap-y-4 lg:gap-y-8">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        SPECIAL OFFERS
      </p>
      <div className="flex gap-x-2.5 overflow-x-auto no-scrollbar touch-scroll scroll-snap-x">
        {specialOffers.map((item) => (
          <div className="shrink-0 w-[350px] lg:w-[409px] scroll-snap-start" key={item.id}>
            <ProductCardItem item={{
              id: item.id,
              name: item.name,
              image: item.image,
              link: `/products/${item.id}`,
              price: item.price
            }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
