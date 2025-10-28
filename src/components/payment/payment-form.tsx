"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const PaymentForm = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY;
  return (
    <div className="px-5 lg:px-0">
      <p
        className={`font-bold text-base lg:text-lg text-neutral-600 leading-[150%]`}
      >
        Payment Information
      </p>
      <div className="my-5">
        <p>How would like to pay?</p>
<div className="flex items-center gap-x-2.5 my-5 flex-wrap">
  <Button
    type="button"
    variant="ghost"
    className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] cursor-pointer flex items-center justify-center"
  >
    <Image
      width={36}
      height={28}
      src="/images/mastercard.webp"
      alt="master-card"
      className="aspect-[48/37] object-contain"
    />
  </Button>

  <Button
    type="button"
    variant="ghost"
    className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] cursor-pointer flex items-center justify-center"
  >
    <Image
      width={45}
      height={15}
      src="/images/visa.webp"
      alt="visa"
      className="aspect-[63/20] object-contain"
    />
  </Button>

  <Button
    type="button"
    variant="ghost"
    className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] cursor-pointer flex items-center justify-center"
  >
    <Image
      width={25}
      height={30}
      src="/images/paypal.webp"
      alt="pay-pal"
      className="aspect-[31/36] object-contain"
    />
  </Button>

  <Button
    type="button"
    variant="ghost"
    className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] cursor-pointer flex items-center justify-center"
  >
    <Image
      width={30}
      height={20}
      src="/images/american-express.webp"
      alt="american-express"
      className="aspect-[44/29] object-contain"
    />
  </Button>
</div>

      </div>
    </div>
  );
};

export default PaymentForm;
