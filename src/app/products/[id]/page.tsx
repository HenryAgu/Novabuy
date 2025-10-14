import { products } from "@/components/data/products";
import ProductDetails from "@/components/products/product-details";
import Image from "next/image";
import React from "react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // const product = products.find((product) => product.id === id);

  // console.log("Product ID:", id);
  // console.log("Product Details:", product);

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-15 pr-5 pl-5 lg:pl-0 lg:pr-24 pb-14 lg:pb-28">
      <div className="basis-[50%] flex flex-col gap-y-5">
        <Image
          src={"/images/shoe1.png"}
          alt="{product.name}"
          width={658}
          height={875}
          className="w-full h-[530px] lg:h-[875px] object-cover"
        />
      </div>
      <ProductDetails id={id}  />
    </main>
  );
};

export default ProductPage;
