import React from "react";
import { useCartStore } from "@/stores/cart-stores";
import Link from "next/link";

const Total = () => {
  const { getTotalItems } = useCartStore((state) => state);
  const totalItems = getTotalItems();

  return (
    <div className="w-full px-5 lg:px-0">
      {totalItems > 0 && (
        <Link
          href="/delivery"
          className="block w-full lg:w-[80%] py-2.5 bg-primary-500 text-white rounded-[50px] text-base font-normal leading-[150%] text-center"
        >
          Continue CheckOut
        </Link>
      )}
    </div>
  );
};

export default Total;
