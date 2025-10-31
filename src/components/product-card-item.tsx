import React from "react";
import { Product } from "./context/products-context";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  item: Product;
}

const ProductCardItem = ({ item }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${item.id}`}
      className="flex flex-col gap-y-2 lg:gap-y-4"
    >
        <Image
          src={item.image}
          alt={item.name}
          width={409}
          height={437}
          className="
            aspect-[409/437]
            object-cover
           w-full h-full
            transition-transform
            duration-500
            ease-in-out
            hover:scale-110
            hover:shadow-2xl
          "
        />

      {/* Text */}
      <div className="flex flex-col gap-y-[3.5px] lg:gap-y-[7px]">
        <p className="capitalize font-semibold text-base lg:text-lg text-black">
          {item.name}
        </p>
        <span className="text-neutral-300 text-sm lg:text-base font-semibold">
          ₦ {item.price?.toLocaleString("en-US")}
        </span>
      </div>
    </Link>
  );
};

export default ProductCardItem;
