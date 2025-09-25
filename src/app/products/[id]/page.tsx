import { Button } from "@/components/ui/button";
import { Rubik } from "next/font/google";
import Link from "next/link";
import React from "react";

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

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-x-15 pr-5 pl-5 lg:pl-0 lg:pr-24 pb-14 lg:pb-28">
      <div className="basis-[50%] bg-black">1</div>
      <div className="basis-[50%] p-2.5 flex flex-col gap-y-3.5 lg:gap-y-7">
        <div className="flex flex-col gap-y-3">
          <p className="text-[23px] font-bold text-neutral-600 leading-[150%]">
            The NovaGlam Shoe
          </p>
          <p className="text-[23px] font-semibold text-neutral-600 leading-[150%]">
            $ 81,500
          </p>
        </div>
        <p
          className={`${rubik.className} text-base text-neutral-400 font-normal leading-[150%]`}
        >
          The NovaGlam Shoe is exquisitely crafted in plush shearling calfskin,
          offering a harmonious blend of comfort and style.
        </p>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-neutral-600 leading-[150%]">
              Select Size:
            </p>
            <span
              className={`${rubik.className} font-normal text-base text-neutral-400 underline leading-[150%]`}
            >
              Size Guide
            </span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 lg:grid-cols-6 gap-2.5 w-full">
          {sizes.map((item) => (
            <Button
              type="button"
              variant="ghost"
              className="border border-neutral-50 rounded-0 px-2.5 py-10 lg:py-12 flex items-center justify-center gap-y-3.5"
              key={item.id}
            >
              {item.size}
            </Button>
          ))}
        </div>
        <Button className="bg-primary-500 p-2.5 rounded-[50px] text-white font-normal leading-[150%] cursor-pointer">
          Add to Shopping Bag
        </Button>
      </div>
    </main>
  );
};

export default ProductPage;
