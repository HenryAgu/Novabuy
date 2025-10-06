import React from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cart-stores";

const Total = () => {
  const { getTotalItems } = useCartStore((state) => state);
  const totalItems = getTotalItems();
  return (
    <div>
      <Button
        type="button"
        variant="default"
        className="w-full lg:w-[80%] bg-primary-500 text-white rounded-[50px]  text-base font-normal leading-[150%]"
        disabled={totalItems === 0}
      >
        Continue CheckOut
      </Button>
    </div>
  );
};

export default Total;
