import SwiperProducts from "@/components/home/swiper-products";
import CarouselSectionProducts from "@/components/home/carousel-section-products";
import WhoFor from "@/components/home/who-for";
import React from "react";
import { carouselProducts, products, swiperProducts } from "@/components/data/products";

const MenPage = () => {
  return (
    <main className="lg:pb-10 pb-8 ">
      <div className="min-h-screen">
        <WhoFor title="MEN SHOPPING CATEGORIES" products={products} />
        <SwiperProducts title="NEW PRODUCTS" products={swiperProducts} />
        <SwiperProducts title="TRENDING PRODUCTS" products={swiperProducts} />
        <CarouselSectionProducts title="Explore" products={carouselProducts} />
      </div>
    </main>
  );
};

export default MenPage;
