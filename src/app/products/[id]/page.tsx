"use client";
import { useParams } from "next/navigation";
import { useProducts } from "@/components/context/products-context";
import ProductDetails from "@/components/products/product-details";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const { getProductById, loading } = useProducts();
  const product = getProductById(id);

  console.log(product)

  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-15 pr-5 pl-5 lg:pl-0 lg:pr-24 pb-14 lg:pb-28">
      <div className="basis-[50%] flex flex-col gap-y-5">
        <Image
          src={product?.image ?? "/images/broken-image.png"}
          alt={product?.name || "Product Image"}
          width={658}
          height={875}
          className="w-full h-[530px] lg:h-[875px] object-cover"
        />
      </div>
      <ProductDetails id={id} product={product}/>
    </main>
  );
};

export default ProductPage;
