import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCardItem from "../product-card-item";
import { useProducts } from "../context/products-context";

interface CarouselSectionProps {
  title: string;
}

const CarouselSectionProducts = ({ title }: CarouselSectionProps) => {
  const { products } = useProducts();
  
  // Filter products based on title for different sections
  const getFilteredProducts = () => {
    switch (title) {
      case "TRENDING PRODUCTS":
        return products.slice(0, 6); // First 6 products as trending
      case "NEW PRODUCTS":
        return products.slice(0, 8); // First 8 products as new
      case "SPECIAL OFFERS":
        return products.filter(p => p.price > 50000).slice(0, 6); // Products over 50k as special offers
      default:
        return products.slice(0, 6);
    }
  };

  const filteredProducts = getFilteredProducts();

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
            {filteredProducts.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <ProductCardItem item={{
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  link: `/products/${item.id}`,
                  price: item.price
                }} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSectionProducts;
