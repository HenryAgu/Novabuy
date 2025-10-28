"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface paymentOptions{
  src: string;
  type: string;
  alt: string;
  width: number;
  height: number;
}

const PaymentForm = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY;

  const paymentOptions = [
    {
      src: "/images/mastercard.webp",
      type: "mastercard",
      alt: "master-card",
      width: 36,
      height: 28,
    },
    {
      src: "/images/visa.webp",
      type: "visa",
      alt: "visa",
      width: 45,
      height: 15,
    },
    {
      src: "/images/paypal.webp",
      type: "paypal",
      alt: "pay-pal",
      width: 25,
      height: 30,
    },
    {
      src: "/images/american-express.webp",
      type: "american-express",
      alt: "american-express",
      width: 30,
      height: 20,
    },
  ];

  return (
    <div className="px-5 lg:px-0">
      <p className="font-bold text-base lg:text-lg text-neutral-600 leading-[150%]">
        Payment Information
      </p>

      <div className="my-5">
        <p>How would you like to pay?</p>

        <div className="flex items-center gap-x-2.5 my-5 flex-wrap">
          {paymentOptions.map((option, index) => (
            <Button
              key={index}
              type="button"
              variant="ghost"
              className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] cursor-pointer flex items-center justify-center"
            >
              <Image
                src={option.src}
                alt={option.alt}
                width={option.width}
                height={option.height}
                className="object-contain"
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
