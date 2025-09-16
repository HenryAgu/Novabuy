"use client";
import Carousel from "@/components/home/carousel";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import TrendingProducts from "@/components/home/trending-products";
import WhoFor from "@/components/home/who-for";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

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
        <WhoFor />
        <TrendingProducts/>
        <FeaturedProducts/>
      </div>
    </main>
  );
}
