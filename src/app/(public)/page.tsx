"use client";
import Footer from "@/components/footer";
import Carousel from "@/components/home/carousel";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import NovabuyNews from "@/components/home/novabuy-news";
import WhoFor from "@/components/home/who-for";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { ProductCard } from "@/components/types";
import { useEffect, useState } from "react";
import SwiperProducts from "@/components/home/swiper-products";
import CarouselSectionProducts from "@/components/home/carousel-section-products";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const products: ProductCard[] = [
    {
      name: "men",
      image: "/images/item1.png",
      link: "",
    },
    {
      name: "women",
      image: "/images/item2.png",
      link: "",
    },
    {
      name: "Kids",
      image: "/images/item3.png",
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

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        <Carousel />
        <WhoFor title="WHO ARE YOU SHOPPING FOR?" products={products} />
        <CarouselSectionProducts
          title="TRENDING PRODUCTS"
          products={carouselProducts}
        />
        <FeaturedProducts />
        <SwiperProducts title="NEW PRODUCTS" products={swiperProducts} />
        <SwiperProducts title="SPECIAL OFFERS" products={swiperProducts} />
        <NovabuyNews />
      </div>
      <Footer />
    </main>
  );
}
