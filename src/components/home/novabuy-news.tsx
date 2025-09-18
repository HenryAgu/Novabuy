import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface News {
  image: string;
  title: string;
  description: string;
  link: string;
}

const news: News[] = [
  {
    image: "/images/news.png",
    title: "THE ECHELON CRAFT: NOVABUY x PRADA x NIKE COLLAB",
    description:
      "In a groundbreaking fusion of fashion, luxury, and athleticism, three giants in their respective domains have joined forces to create a fashion collaboration like no other. NovaBuy, Prada, and Nike have embarked on a journey to redefine the boundaries of style, pushing the envelope of creativity and innovation. In a world where fashion is more than just clothing, where individual expression knows no bounds, this collaboration opens doors to a realm where style and functionality coexist.",
    link: "",
  },
  {
    image: "/images/new2.png",
    title: "THE ECHELON CRAFT: NOVABUY x PRADA x NIKE COLLAB",
    description:
      "In a groundbreaking fusion of fashion, luxury, and athleticism, three giants in their respective domains have joined forces to create a fashion collaboration like no other. NovaBuy, Prada, and Nike have embarked on a journey to redefine the boundaries of style, pushing the envelope of creativity and innovation. In a world where fashion is more than just clothing, where individual expression knows no bounds, this collaboration opens doors to a realm where style and functionality coexist.",
    link: "",
  },
  {
    image: "/images/news3.png",
    title: "THE ECHELON CRAFT: NOVABUY x PRADA x NIKE COLLAB",
    description:
      "In a groundbreaking fusion of fashion, luxury, and athleticism, three giants in their respective domains have joined forces to create a fashion collaboration like no other. NovaBuy, Prada, and Nike have embarked on a journey to redefine the boundaries of style, pushing the envelope of creativity and innovation. In a world where fashion is more than just clothing, where individual expression knows no bounds, this collaboration opens doors to a realm where style and functionality coexist.",
    link: "",
  },
  {
    image: "/images/news4.png",
    title: "THE ECHELON CRAFT: NOVABUY x PRADA x NIKE COLLAB",
    description:
      "In a groundbreaking fusion of fashion, luxury, and athleticism, three giants in their respective domains have joined forces to create a fashion collaboration like no other. NovaBuy, Prada, and Nike have embarked on a journey to redefine the boundaries of style, pushing the envelope of creativity and innovation. In a world where fashion is more than just clothing, where individual expression knows no bounds, this collaboration opens doors to a realm where style and functionality coexist.",
    link: "",
  },
  {
    image: "/images/news5.png",
    title: "THE ECHELON CRAFT: NOVABUY x PRADA x NIKE COLLAB",
    description:
      "In a groundbreaking fusion of fashion, luxury, and athleticism, three giants in their respective domains have joined forces to create a fashion collaboration like no other. NovaBuy, Prada, and Nike have embarked on a journey to redefine the boundaries of style, pushing the envelope of creativity and innovation. In a world where fashion is more than just clothing, where individual expression knows no bounds, this collaboration opens doors to a realm where style and functionality coexist.",
    link: "",
  },
];

const NovabuyNews = () => {
  return (
    <section className="lg:px-24 lg:py-15 lg:pb-30 px-5 py-5 flex gap-x-6">
      <div className="">
        <p className="[writing-mode:vertical-lr] rotate-180 text-neutral-150 font-bold leading-[150%] text-[56px]">
          NOVABUY NEWS
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }} plugins={[
             Autoplay({
          delay: 2000,
        }),
        ]}
      >
        <CarouselContent className="basis-[100%] ">
          {news.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex gap-x-20.5 lg:basis-[100%]"
            >
              <div className="basis-[50%] max-w-[507px] w-full shrink-0">
                <Image
                  src={item.image}
                  alt="image"
                  width={507}
                  height={490}
                  className="aspect-[507/490] h-[490px] object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-y-6 w-0">
                <p className=" text-black font-bold text-[26px] leading-[150%]">
                  THE ECHELON CRAFT: NOVABUY X PRADA X NIKE COLLAB
                </p>
                <div className="flex flex-col gap-y-5">
                  <p className="text-neutral-400 font-normal text-base leading-[150%]">
                    In a groundbreaking fusion of fashion, luxury, and
                    athleticism, three giants in their respective domains have
                    joined forces to create a fashion collaboration like no
                    other. NovaBuy, Prada, and Nike have embarked on a journey
                    to redefine the boundaries of style, pushing the envelope of
                    creativity and innovation. In a world where fashion is more
                    than just clothing, where individual expression knows no
                    bounds, this collaboration opens doors to a realm where
                    style and functionality coexist.
                  </p>
                  <Link
                    href=""
                    className="underline text-sm font-medium text-black"
                  >
                    EXPLORE THE ECHELON CRAFT WORLD
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center gap-4 mt-10">
          <CarouselPrevious className=" bg-[#E2E2E2] h-[54px] w-[54px]" />
          <CarouselNext className="bg-[#E2E2E2] h-[54px] w-[54px]" />
        </div>
      </Carousel>
    </section>
  );
};

export default NovabuyNews;
