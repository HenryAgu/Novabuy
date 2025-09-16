import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCard } from "../types";

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

const WhoFor = () => {
  return (
    <section className="px-5 lg:px-24 py-5 lg:py-15 flex flex-col gap-y-8">
      <p className="text-black font-bold text-[26px] leading-[150%]">
        WHO ARE YOU SHOPPING FOR?
      </p>
      <div className="grid gap-2.5 grid-cols-3">
        {products.map((item) => (
          <div className="flex flex-col gap-y-4" key={item.name}>
            <Image
              src={item.image}
              alt="image"
              width={409}
              height={437}
              className="aspect-[409/437] object-cover w-full"
            />
            <Link href={item.link} className="capitalize font-semibold text-lg text-black">{item.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoFor;
