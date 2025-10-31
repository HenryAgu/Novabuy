import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-5 lg:px-24 py-10 pt-20 lg:py-30 w-full">
      <Image
        src="/images/Hero.webp"
        alt="hero_image"
        width={1199}
        height={437}
        data-aos="zoom-in"
        className="aspect-[1199/437] mx-auto"
      />
      <div className="mt-10 lg:mt-20">
        <table className="min-w-[280px] lg:min-w-[323px] border-y border-gray-200 text-sm text-left">
          <tbody>
            <tr className="border-b border-b-neutral-50">
              <td className="py-1.5 lg:py-3.5 pr-5 lg:pr-10 neutral-100 text-xs lg:text-sm font-normal">
                Product Name
              </td>
              <td className="py-1.5 lg:py-3.5 font-semibold text-neutral-500 text-sm lg:text-base">
                NOVASTRIDES WEAR
              </td>
            </tr>
            <tr className="border-b border-b-neutral-50">
              <td className="py-1.5 lg:py-3.5 pr-5 lg:pr-10 neutral-100 text-xs lg:text-sm font-normal">
                Colour Option
              </td>
              <td className="py-1.5 lg:py-3.5 font-semibold text-neutral-500 text-sm lg:text-base">White, Black, Pink</td>
            </tr>
            <tr className="border-b border-b-neutral-50">
              <td className="py-1.5 lg:py-3.5 pr-5 lg:pr-10 neutral-100 text-xs lg:text-sm font-normal">
                Available Sizes
              </td>
              <td className="py-1.5 lg:py-3.5 font-semibold text-neutral-500 text-sm lg:text-base">7, 8, 9, 10, 11, 12, 13</td>
            </tr>
            <tr>
              <td className="py-1.5 lg:py-3.5 pr-5 lg:pr-10 neutral-100 text-xs lg:text-sm font-normal">
                Prices
              </td>
              <td className="py-1.5 lg:py-3.5 font-semibold text-neutral-500 text-sm lg:text-base">$135.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hero;
