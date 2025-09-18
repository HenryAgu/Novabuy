import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCard } from "./types";

interface ProductCardProps{
    item:ProductCard
}

const ProductCardItem = ({item}:ProductCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-4">
      <Image
        src={item.image}
        alt="image"
        width={409}
        height={437}
        className="aspect-[409/437] object-cover w-full"
      />
      <div className="flex flex-col gap-y-[3.5px] lg:gap-y-[7px]">
        <Link
          href={item.link}
          className="capitalize font-semibold text-base lg:text-lg text-black"
        >
          {item.name}
        </Link>
        <span className="text-neutral-300 text-sm lg:text-base font-semibold">
          $ {item.price?.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ProductCardItem;
