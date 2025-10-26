import React from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cart-stores";
import { toast } from "sonner";
import { useProducts } from "../context/products-context";

type ProductDetailsProps = {
  id: string;
};

const AddToBag = ({ id }: ProductDetailsProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { getProductById } = useProducts();
  
  const handleAddToCart = async () => {
    const product = getProductById(id);
    
    if (!product) {
      toast.error("Product not found!");
      return;
    }

    // Convert Firebase product to cart item format
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      size: 42, // Default size, in real app this would be selected by user
    };

    await new Promise((resolve) => setTimeout(resolve, 500));
    addToCart(cartItem);
    toast.success("Item added to cart!");
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
