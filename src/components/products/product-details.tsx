"use client";
import React from "react";
import { Button } from "../ui/button";
import { Rubik } from "next/font/google";
import AddToBag from "./add-to-bag";
import { Product } from "../context/products-context";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const sizes = [
  { id: crypto.randomUUID(), size: 38 },
  { id: crypto.randomUUID(), size: 38.5 },
  { id: crypto.randomUUID(), size: 39 },
  { id: crypto.randomUUID(), size: 39.5 },
  { id: crypto.randomUUID(), size: 40 },
  { id: crypto.randomUUID(), size: 40.5 },
  { id: crypto.randomUUID(), size: 41 },
  { id: crypto.randomUUID(), size: 41.5 },
  { id: crypto.randomUUID(), size: 42 },
  { id: crypto.randomUUID(), size: 42.5 },
  { id: crypto.randomUUID(), size: 43 },
  { id: crypto.randomUUID(), size: 43.5 },
  { id: crypto.randomUUID(), size: 44 },
  { id: crypto.randomUUID(), size: 44.5 },
  { id: crypto.randomUUID(), size: 45 },
  { id: crypto.randomUUID(), size: 45.5 },
  { id: crypto.randomUUID(), size: 46 },
  { id: crypto.randomUUID(), size: 46.5 },
  { id: crypto.randomUUID(), size: 47 },
  { id: crypto.randomUUID(), size: 47.5 },
];

type ProductDetailsProps = {
  id: string;
  product?: Product;
};

const ProductDetails = ({ id, product }: ProductDetailsProps) => {
  return (
    <aside className="basis-[50%] lg:p-2.5 flex flex-col gap-y-3.5 lg:gap-y-7">
      <div className="flex flex-col gap-y-3">
        <p className="text-lg lg:text-[23px] font-bold text-neutral-600 lg:leading-[150%]">
          {product?.name ?? "--"}
        </p>
        <p className="text-lg lg:text-[23px] font-semibold text-neutral-600 lg:leading-[150%]">
          ₦ {product?.price?.toLocaleString()}
        </p>
      </div>
      <p
        className={`${rubik.className} text-sm lg:text-base text-neutral-400 font-normal lg:leading-[150%]`}
      >
        {product?.description}
      </p>
      {product?.category === "shoe" ? (
        <div className="">
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <p className="lg:text-base font-semibold text-neutral-600 lg:leading-[150%] text-sm">
                Select Size:
              </p>
              <span
                className={`${rubik.className} font-normal text-sm lg:text-base text-neutral-400 underline lg:leading-[150%]`}
              >
                Size Guide
              </span>
            </div>
          </div>
          <div className="mt-2 lg:mt-4 grid grid-cols-4 lg:grid-cols-6 gap-2.5 w-full">
            {sizes.map((item) => (
              <Button
                type="button"
                variant="ghost"
                className="border border-neutral-50 rounded-0 px-2.5 py-10 lg:py-12 flex items-center justify-center gap-y-3.5"
                key={item.id}
                onClick={() => {
                  console.log(item.size);
                }}
              >
                {item.size}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <AddToBag id={id} />
    </aside>
  );
};

export default ProductDetails;
