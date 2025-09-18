"use client";
import Footer from "@/components/footer";
import AngleRight from "@/components/icons/angle-right";
import Navbar from "@/components/navbar";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
}

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const ProductLayout = ({ children }: ProductLayoutProps) => {
  const pathname = usePathname();

  // remove the `/products/` prefix
  const cleanPath = pathname.replace(/^\/products\//, "");

  return (
    <main>
      <Navbar />
      <div
        className={`${rubik.className} lg:px-24 px-5 flex items-center gap-x-[15px]`}
      >
        <Link href="/" className=" text-sm font-normal text-neutral-600 hover:underline">Home</Link>
        <AngleRight />
        <p className="capitalize text-sm font-normal text-neutral-600">{cleanPath || "Products"}</p>
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default ProductLayout;
