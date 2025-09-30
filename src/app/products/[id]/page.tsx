import ProductDetails from "@/components/products/product-details";
import Image from "next/image";
import React from "react";

const productImages: string[] = [
  "/images/shoe1.png",
  "/images/shoe2.png",
  "/images/shoe3.png",
];

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id)

  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-15 pr-5 pl-5 lg:pl-0 lg:pr-24 pb-14 lg:pb-28">
      <div className="basis-[50%] flex flex-col gap-y-5">
        {productImages.map((image, index) => (
          <Image
            src={image}
            alt="images"
            width={658}
            height={875}
            className="w-full h-[530px] lg:h-[875px] object-cover"
            key={index}
          />
        ))}
      </div>
      <ProductDetails id={id}/>
    </main>
  );
};

export default ProductPage;
