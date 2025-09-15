import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-5 lg:px-24 py-10 lg:py-30 w-full">
      <Image
        src="/images/Hero.webp"
        alt="hero_image"
        width={1199}
        height={437}
        className="aspect-[1199/437] mx-auto"
      />
      <div className="mt-20">
        <table className="min-w-[323px] border-y border-gray-200 text-sm text-left">
          <tbody>
            <tr className="border-b border-b-neutral-50">
              <td className="py-3.5 pr-10 neutral-100 text-sm font-normal">
                Product Name
              </td>
              <td className="py-3.5 font-semibold text-neutral-500 text-base">
                NOVASTRIDES WEAR
              </td>
            </tr>
            <tr className="border-b border-b-neutral-50">
              <td className="py-3.5 neutral-100 text-sm font-normal">
                Colour Option
              </td>
              <td className="py-3.5 text-neutral-500 text-base font-semibold">White, Black, Pink</td>
            </tr>
            <tr className="border-b border-b-neutral-50">
              <td className="py-3.5 neutral-100 text-sm font-normal">
                Available Sizes
              </td>
              <td className="py-3.5 text-neutral-500 text-base font-semibold">7, 8, 9, 10, 11, 12, 13</td>
            </tr>
            <tr>
              <td className="py-3.5 neutral-100 text-sm font-normal">
                Prices
              </td>
              <td className="py-3.5 font-semibold text-neutral-500 text-base">$135.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hero;
