"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { usePaystackPayment } from "react-paystack";
import Image from "next/image";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-stores";

interface PaymentOption {
  src: string;
  type: string;
  alt: string;
  width: number;
  height: number;
}

interface CustomerDetails {
  email: string;
  name: string;
}

const PaymentForm = () => {
  const paymentOptions: PaymentOption[] = [
    { src: "/images/mastercard.webp", type: "mastercard", alt: "master-card", width: 36, height: 28 },
    { src: "/images/visa.webp", type: "visa", alt: "visa", width: 45, height: 15 },
    { src: "/images/paypal.webp", type: "paypal", alt: "pay-pal", width: 25, height: 30 },
    { src: "/images/american-express.webp", type: "american-express", alt: "american-express", width: 30, height: 20 },
  ];

  const {clearCart} = useCartStore();

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";

  // ✅ Initialize from localStorage safely (only runs on client)
  const [customer] = useState<CustomerDetails | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("customer-details");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const [totalPrice] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("total");
      return stored ? JSON.parse(stored) : 0;
    }
    return 0;
  });

  const config = {
    email: customer?.email ?? "no-email@example.com",
    amount: (totalPrice || 0) * 100, // Paystack expects amount in kobo
    publicKey,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePay = () => {
    initializePayment({
      onSuccess: (response: any) => {
        console.log("Payment successful:", response);
        clearCart();
        toast.success("Payment successful!");
      },
      onClose: () => {
        toast.error("Payment window closed");
      },
    });
  };

  if (!customer) {
    return <p className="text-gray-500 text-sm">Loading customer details...</p>;
  }

  return (
    <div className="px-5 lg:px-0">
      <p className="font-bold text-base lg:text-lg text-neutral-600 leading-[150%]">
        Payment Information
      </p>

      <div className="my-5">
        <p>How would you like to pay?</p>

        <div className="flex items-center gap-1 lg:gap-2.5 my-5 flex-wrap">
          {/* ✅ Custom Paystack Image Button */}
          <Button
            onClick={handlePay}
            variant="ghost"
            className="border border-[#E9E9E9] hover:border-primary-500 hover:bg-[#EFEFFE] w-[70px] h-[40px] lg:w-[106px] lg:h-[57px] flex items-center justify-center"
          >
            <Image
              src="/images/paystack.webp"
              alt="Paystack"
              width={30}
              height={30}
              className="object-contain"
            />
          </Button>

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
