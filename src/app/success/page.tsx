"use client";

import { CustomerDetails } from "@/components/payment/payment-form";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-stores";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const { clearCart } = useCartStore();

  // ✅ Initialize state directly from localStorage (no useEffect needed)
  const [customerItems] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("customer-items");
      try {
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [totalPrice] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("total");
      return stored ? JSON.parse(stored) : 0;
    }
    return 0;
  });

  const [customer] = useState<CustomerDetails | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("customer-details");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const handleContinueShopping = () => {
    router.push("/");
    clearCart();
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-5">
      <div className="max-w-full lg:max-w-[446px] px-6 lg:px-10.5 py-5 lg:py-8 border-[0.5px] border-[#E0E0E0] rounded-4xl shadow-[3px_3px_15px_0_rgba(209,209,209,0.3)] flex flex-col gap-y-8 bg-white">
        {/* ✅ Success Message */}
        <div className="flex flex-col items-center gap-y-3">
          <Image
            src="/images/check.svg"
            alt="check"
            width={120}
            height={120}
            className="aspect-square"
          />
          <div className="flex flex-col text-center gap-y-1">
            <p className="text-black font-semibold text-2xl leading-[150%]">
              Payment Successful
            </p>
            <p className="text-[#878787] font-normal text-sm leading-[150%]">
              Your order is on its way to you.
            </p>
          </div>
        </div>

        {/* ✅ Order Summary */}
        <div className="border-[0.5px] border-[#E0E0E0] rounded-4xl py-6">
          <div className="pb-4 px-4 border-b border-[#E0E0E0]">
            <p className="text-base text-black font-semibold leading-[150%]">
              Order Summary
            </p>
          </div>

          <div className="px-4 pt-4">
            <table className="w-full border-collapse text-sm">
              <tbody className="text-[#878787] font-normal leading-[150%]">
                {customerItems.length > 0 ? (
                  customerItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E0E0E0] border-dotted"
                    >
                      <td className="py-3 text-xs align-top">
                        Item {index + 1}
                      </td>
                      <td className="py-3 text-black text-xs text-right font-medium w-[70%] capitalize">
                        {item.name || item.productName} <br />
                        (qty: {item.quantity || "--"}) <br />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center py-3 text-xs">
                      No items found.
                    </td>
                  </tr>
                )}

                {/* 📍 Location */}
                <tr className="border-b border-[#E0E0E0] border-dotted">
                  <td className="py-3 align-top text-xs">Location</td>
                  <td className="py-3 text-black text-xs text-right font-medium leading-[150%] capitalize">
                    {customer?.location || "N/A"}
                  </td>
                </tr>

                {/* 💰 Total */}
                <tr>
                  <td className="py-3 text-xs ">Total</td>
                  <td className="py-3 text-black text-xs text-right font-medium">
                    ₦ {totalPrice.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 🛍️ Continue Button */}
        <Button
          onClick={handleContinueShopping}
          className="w-fit mt-10 mx-auto rounded-3xl bg-primary-500 text-white tracking-tighter text-sm py-3 px-8 font-semibold leading-[150%]"
        >
          Continue Shopping
        </Button>
      </div>
    </main>
  );
};

export default SuccessPage;
