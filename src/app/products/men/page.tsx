import SwiperProducts from "@/components/home/swiper-products";
import CarouselSectionProducts from "@/components/home/carousel-section-products";
import WhoFor from "@/components/home/who-for";
import React from "react";

const MenPage = () => {
  return (
    <main className="lg:pb-10 pb-8 ">
      <div className="min-h-screen">
        <WhoFor title="MEN SHOPPING CATEGORIES" />
        <SwiperProducts title="NEW PRODUCTS" />
        <SwiperProducts title="TRENDING PRODUCTS" />
        <CarouselSectionProducts title="Explore" />
      </div>
    </main>
  );
};

export default MenPage;
