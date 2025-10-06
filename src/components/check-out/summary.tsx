"use client";

import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Rubik } from "next/font/google";
import QuestionIcon from "../icons/question-icon";
import { useCartStore } from "@/stores/cart-stores";
import Link from "next/link";
import { usePathname } from "next/navigation";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const Summary = () => {
  const { getTotalPrice, getTotalItems } = useCartStore((state) => state);
  const pathname = usePathname();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 4500 : 0; // Free shipping threshold logic
  const taxes = 0; // No taxes for now
  const total = subtotal + shipping + taxes;
  const totalItems = getTotalItems();

  return (
    <div className="basis-[50%]">
      <p className={`font-bold text-lg text-neutral-600 leading-[150%]`}>
        Summary
      </p>
      <ScrollArea className="my-5 max-w-full lg:max-w-[500px] lg:h-[70vh] h-[20vh]">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%] flex items-center gap-x-3.5`}
            >
              <span>Sub Total ({totalItems} items)</span>
              <QuestionIcon />
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ {subtotal.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%]`}
            >
              Shipping
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ {shipping.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%] flex items-center gap-x-3.5`}
            >
              <span>Taxes</span>
              <QuestionIcon />
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ {taxes.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between my-5 py-2.5 border-t border-t-[#D3D3D3]">
          <p
            className={`${rubik.className} text-neutral-600 text-xl font-normal`}
          >
            Total
          </p>
          <p className="text-neutral-600 font-bold text-xl leading-[150%]">
            ₦ {total.toLocaleString()}
          </p>
        </div>
        {pathname !== "/delivery" && (
          <Button
            type="button"
            variant="default"
            className="my-10 w-full bg-primary-500 text-white rounded-[50px]  text-base font-normal leading-[150%]"
            disabled={totalItems === 0}
          >
            <Link href="/auth/sign-up">Continue CheckOut</Link>
          </Button>
        )}
      </ScrollArea>
    </div>
  );
};

export default Summary;
