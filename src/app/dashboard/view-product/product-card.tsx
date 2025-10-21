import DeleteIcon from "@/components/icons/delete-icon";
import { ProductCard } from "@/components/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  product: ProductCard;
};

const ProductCardComponent = ({ product }: ProductCardProps) => {
  return (
    <div className="p-3 flex flex-col gap-y-2 border border-accent rounded-lg">
      <div className="relative">
        <Image
          src={product.image ?? "/images/broken-image.png"}
          alt="image"
          width={573}
          height={220}
          className="w-full h-[220px] object-cover rounded-lg"
        />
        <div className="absolute top-5 right-5">
          <Button variant="ghost" className="bg-accent/100 cursor-pointer">
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2.5">
        <p className="text-lg font-semibold text-neutral-600 capitalize">{product.name}</p>
        <p className="text-base font-medium text-neutral-600">$ {product?.price?.toLocaleString()}</p>
        <div className="flex items-center gap-x-2.5">
          <Link
            href="/dashboard/edit-product"
            className="bg-primary-500 text-white text-base font-normal py-1.5 px-7 rounded-xl"
          >
            Edit This Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
