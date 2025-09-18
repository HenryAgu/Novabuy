import SwiperProducts from "@/components/home/swiper-products";
import CarouselSectionProducts from "@/components/home/carousel-section-products";
import WhoFor from "@/components/home/who-for";
import { ProductCard } from "@/components/types";
import React from "react";

const products: ProductCard[] = [
  {
    name: "shoes",
    image: "/images/men1.png",
    link: "/products/men/shoes",
  },
  {
    name: "clothing",
    image: "/images/men2.png",
    link: "",
  },
  {
    name: "accessories",
    image: "/images/men3.png",
    link: "",
  },
];

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
];

const carouselProducts: ProductCard[] = [
  {
    name: "novafit",
    image: "/images/explore1.png",
    link: "",
    price: 140500,
  },
  {
    name: "NovaStyle Trouser",
    image: "/images/explore2.png",
    link: "",
    price: 140500,
  },
  {
    name: "NovaDome Bucket Hat",
    image: "/images/explore3.png",
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

const MenPage = () => {
  return (
    <main className="lg:pb-10 pb-8">
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
