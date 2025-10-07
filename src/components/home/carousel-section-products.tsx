import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProductCard } from "../types";
import ProductCardItem from "../product-card-item";
import { carouselProducts } from "../data/products";

interface CarouselSectionProps {
  title: string;
}

const CarouselSectionProducts = ({ title }: CarouselSectionProps) => {
  return (
    <section className="lg:px-24 lg:py-15 px-5 py-8 flex flex-col gap-y-4 lg:gap-y-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-4 lg:mb-8">
          <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%] uppercase">
            {title}
          </p>
          <div className="flex items-center gap-4 ">
            <CarouselPrevious className=" bg-[#E2E2E2] lg:h-[54px] lg:w-[54px]" />
            <CarouselNext className="bg-[#E2E2E2] lg:h-[54px] lg:w-[54px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <CarouselContent className="">
            {carouselProducts.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProductCardItem item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSectionProducts;
