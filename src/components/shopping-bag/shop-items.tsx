import React from "react";
import DeleteIcon from "../icons/delete-icon";
import { Button } from "../ui/button";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { ShopBag } from "../data/shop-bag";
import { Rubik } from "next/font/google";
import CircleMinus from "../icons/circle-minus";
import CircleAdditon from "../icons/circle-additon";
import { useCartStore } from "@/stores/cart-stores";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

interface ItemProps {
  item: ShopBag & { quantity: number };
}

const ShopItems = () => {
  const items = useCartStore((state) => state.items);
  
  return (
    <div className="basis-[50%]">
      <p className={`font-bold text-lg text-neutral-600 leading-[150%]`}>
        Shopping Bag
      </p>
      <ScrollArea className="h-[50vh] lg:h-[70vh]">
        <div className="flex flex-col gap-y-5 lg:gap-y-8 my-5">
          {items.length === 0 ? (
            <p className="text-neutral-400 text-center py-8">Your shopping bag is empty</p>
          ) : (
            items.map((item) => (
              <Item key={item.id} item={item} />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

const Item = ({ item }: ItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore(
    (state) => state
  );
  
  return (
    <div className="flex gap-x-4 lg:gap-x-9.5">
      <Image
        src={item.image}
        width={254}
        height={249}
        alt="item_image"
        className="lg:aspect-[254/249] lg:w-[254px] lg:h-[249px] w-[150px] h-[180px] aspect-square object-cover"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-1 lg:gap-y-2">
          <p className="text-neutral-600 text-lg lg:text-xl font-bold lg:leading-[150%] line-clamp-1">
            {item.name}
          </p>
          <p className="text-neutral-400 font-semibold text-base lg:text-lg">
            ₦ {item.price.toLocaleString()}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div
            className={`${rubik.className} flex flex-col gap-y-2 lg:gap-y-5.5`}
          >
            <p className="text-xs lg:text-sm font-normal text-neutral-300 lg:leading-[150%]">
              Product ID:
            </p>
            <p className="text-xs lg:text-sm font-normal text-neutral-300 lg:leading-[150%]">
              Quantity:
            </p>
            <p className="text-xs lg:text-sm font-normal text-neutral-300 lg:leading-[150%]">
              Size:
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-4 ">
            <p className="text-xs lg:text-sm font-normal text-neutral-400 lg:leading-[150%] line-clamp-1">
              {item.id}
            </p>
            <div className="flex items-center gap-x-2.5 lg:gap-x-5">
              <button 
                className="cursor-pointer" 
                onClick={() => decreaseQuantity(item.id)} 
                disabled={item.quantity === 1}
              >
                <CircleMinus className="w-5 h-5 lg:w-[31px] lg:h-[31px]"/>
              </button>
              <p className="text-xs lg:text-sm font-normal text-neutral-400 lg:leading-[150%]">
                {item.quantity}x
              </p>
              <button 
                className="cursor-pointer" 
                onClick={() => increaseQuantity(item.id)}
              >
                <CircleAdditon className="w-5 h-5 lg:w-[31px] lg:h-[31px]"/>
              </button>
            </div>
            <p className="text-xs lg:text-sm font-normal text-neutral-400 lg:leading-[150%]">
              {item.size}
            </p>
          </div>
        </div>
        <Button 
          type="button" 
          variant="ghost" 
          className="w-fit"
          onClick={() => removeFromCart(item.id)}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default ShopItems;
