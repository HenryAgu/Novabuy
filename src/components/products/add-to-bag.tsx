import React from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cart-stores";

type ProductDetailsProps = {
  id: string;
};

const AddToBag = ({ id }: ProductDetailsProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  
  // Mock product data - in a real app, this would come from an API or props
  const mockProduct = {
    id: id,
    image: "/images/shoe1.png",
    name: "The NovaGlam Shoe",
    price: 81500,
    size: 42, // Default size, in real app this would be selected by user
  };

  const handleAddToCart = () => {
    addToCart(mockProduct);
  };

  return (
    <Button
      className="bg-primary-500 p-2.5 rounded-[50px] text-white font-normal leading-[150%] cursor-pointer"
      onClick={handleAddToCart}
    >
      Add to Shopping Bag
    </Button>
  );
};

export default AddToBag;
