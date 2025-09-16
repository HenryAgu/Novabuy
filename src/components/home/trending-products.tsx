import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../types";

const products: ProductCard[] = [
  {
    name: "men",
    image: "/images/item4.png",
    link: "",
    price: 140500,
  },
  {
    name: "women",
    image: "/images/item5.png",
    link: "",
    price: 140500,
  },
  {
    name: "Kids",
    image: "/images/item6.png",
    link: "",
    price: 140500,
  },
  {
    name: "men",
    image: "/images/item3.png",
    link: "",
    price: 140500,
  },
  {
    name: "women",
    image: "/images/item5.png",
    link: "",
    price: 140500,
  },
  {
    name: "Kids",
    image: "/images/item4.png",
    link: "",
    price: 140500,
  },
];

const TrendingProducts = () => {
  return (
    <section className="lg:px-24 lg:py-15 px-5 py-5 flex flex-col gap-y-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mr-10"
      >
        {" "}
        <div className="flex items-center justify-between mb-8">
          <p className="text-black font-bold text-[26px] leading-[150%]">
            TRENDING PRODUCTS
          </p>
          <div className="flex items-center gap-4 ">
            <CarouselPrevious className=" bg-[#E2E2E2] h-[54px] w-[54px]" />
            <CarouselNext className="bg-[#E2E2E2] h-[54px] w-[54px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <CarouselContent className="">
            {products.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col gap-y-4">
                  <Image
                    src={item.image}
                    alt="image"
                    width={409}
                    height={437}
                    className="aspect-[409/437] object-cover w-full"
                  />
                  <div className="flex flex-col gap-y-[7px]">
                    <Link
                      href={item.link}
                      className="capitalize font-semibold text-lg text-black"
                    >
                      {item.name}
                    </Link>
                    <span className="text-neutral-300 text-base font-semibold">
                      $ {item.price?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default TrendingProducts;
