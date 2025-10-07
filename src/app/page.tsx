"use client";
import Footer from "@/components/footer";
import Carousel from "@/components/home/carousel";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import NovabuyNews from "@/components/home/novabuy-news";
import WhoFor from "@/components/home/who-for";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar/navbar";
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

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        <Carousel />
        <WhoFor title="WHO ARE YOU SHOPPING FOR?" />
        <CarouselSectionProducts title="TRENDING PRODUCTS" />
        <FeaturedProducts />
        <SwiperProducts title="NEW PRODUCTS" />
        <SwiperProducts title="SPECIAL OFFERS" />
        <NovabuyNews />
      </div>
      <Footer />
    </main>
  );
}
