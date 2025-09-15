import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <section className="overflow-hidden whitespace-nowrap pb-15">
      <div className="flex animate-marquee gap-x-20">
        <Image
          src="/images/marquee.webp"
          alt="marquee"
          width={3370}
          height={108}
        />
        <Image
          src="/images/marquee.webp"
          alt="marquee"
          width={3370}
          height={108}
        />
      </div>
    </section>
  );
};

export default Carousel;
