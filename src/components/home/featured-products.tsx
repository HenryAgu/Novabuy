import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const FeaturedProducts = () => {
  return (
    <section className="lg:px-24 lg:py-15 px-5 py-5 flex flex-col gap-y-8">
      <p className="text-black font-bold text-[26px] leading-[150%]">
        FEATURED PRODUCTS
      </p>
      <div className="flex flex-col gap-y-[15px]">
        <div className="relative">
          <Image
            src="/images/product1.png"
            alt="product"
            width={1248}
            height={681}
            className="w-full h-[681px] object-cover"
          />
          <div className="absolute left-10 top-8.5 flex flex-col gap-y-4.5 text-white">
            <p className="font-bold text-[29px] leading-[150%]">
              NOVABUY NEW EDITION
            </p>
            <p className={`${rubik.className} text-lg font-normal`}>
              Redefining Style with Every Step
            </p>
            <Link
              href="/"
              className={`${rubik.className} text-base font-normal`}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="relative basis-[50%]">
            <Image
              src="/images/product2.png"
              alt="product"
              width={1248}
              height={585}
              className="w-full h-[585px] object-cover"
            />
            <div className="absolute left-10 top-8.5 flex flex-col gap-y-4.5 text-white">
              <p className="font-bold text-[29px] leading-[150%]">FOR HIM</p>
              <p className={`${rubik.className} text-lg font-normal`}>
                Focused on Elevating His Style
              </p>
              <Link
                href="/"
                className={`${rubik.className} text-base font-normal`}
              >
                Explore
              </Link>
            </div>
          </div>{" "}
          <div className="relative basis-[50%]">
            <Image
              src="/images/product3.png"
              alt="product"
              width={1248}
              height={585}
              className="w-full h-[585px] object-cover"
            />
            <div className="absolute left-10 top-8.5 flex flex-col gap-y-4.5 text-white">
              <p className="font-bold text-[29px] leading-[150%]">FOR HER</p>
              <p className={`${rubik.className} text-lg font-normal`}>
                Focused on Empowering her Elegance
              </p>
              <Link
                href="/"
                className={`${rubik.className} text-base font-normal`}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
