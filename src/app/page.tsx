"use client";
import Hero from "@/components/home/hero";
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
      <Hero />
    </main>
  );
}
