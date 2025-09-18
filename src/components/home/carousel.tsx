import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <section className="overflow-hidden whitespace-nowrap pb-5 lg:pb-15">
      <div className="flex animate-marquee gap-x-10 lg:gap-x-20">
        <Image
          src="/images/marquee.webp"
          alt="marquee"
          width={3370}
          height={108}
          className="lg:h-[108px] h-[30px] lg:w-[3370px] w-[1000px]"
        />
        <Image
          src="/images/marquee.webp"
          alt="marquee"
          width={3370}
          height={108}
          className="lg:h-[108px] h-[30px] lg:w-[3370px] w-[1000px]"
        />
      </div>
    </section>
  );
};

export default Carousel;
