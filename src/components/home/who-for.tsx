import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useProducts } from "../context/products-context";

interface WhoForProps{
  title: string;
}

const WhoFor = ({title}:WhoForProps) => {
  const { products } = useProducts();
  
  // Create category data from Firebase products
  const categories = [
    {
      id: "men",
      name: "clothing",
      image: "/images/item1.png",
      link: "/products/men",
    },
    {
      id: "shoes", 
      name: "shoes",
      image: "/images/shoe2.png",
      link: "/products/shoes",
    },
    {
      id: "accessories",
      name: "accessories",
      image: "/images/item4.png",
      link: "/products/accessories",
    },
  ];

  return (
    <section className="px-5 lg:px-24 py-8 lg:py-15 flex flex-col gap-y-4 lg:gap-y-8">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        {title}
      </p>
      <div className="grid gap-5 lg:gap-2.5 grid-cols-1 lg:grid-cols-3">
        {categories?.map((item) => (
          <Link href={item.link ?? ""} className="flex flex-col gap-y-2 lg:gap-y-4" key={item.name}>
            <Image
              src={item.image}
              alt="image"
              width={409}
              height={437}
              className="aspect-[409/437] object-cover w-full"
            />
            <p className="capitalize font-semibold text-base lg:text-lg text-black">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhoFor;
