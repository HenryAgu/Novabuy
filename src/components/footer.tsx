import Image from "next/image";
import React from "react";
import ArrowLongRight from "./icons/arrow-long-right";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

interface SocialMenu {
  image: string;
  link: string;
  alt: string;
}

interface FooterMenu {
  title: string;
  link: string;
}

const socialMenus: SocialMenu[] = [
  { image: "/icons/Twitter.svg", link: "", alt: "twitter" },
  { image: "/icons/Facebook.svg", link: "", alt: "facebook" },
  { image: "/icons/Youtube.svg", link: "", alt: "youtube" },
  { image: "/icons/Instagram.svg", link: "", alt: "instagram" },
];

const getHelp: FooterMenu[] = [
  { title: "Order Status", link: "" },
  { title: "Shipping & Delivery", link: "" },
  { title: "Returns", link: "" },
  { title: "Order Cancellation", link: "" },
  { title: "Payment Option", link: "" },
  { title: "FAQs", link: "" },
  { title: "Contact Us", link: "" },
  { title: "Admin", link: "/auth/admin" },
];

const aboutNovabuy: FooterMenu[] = [
  { title: "News", link: "" },
  { title: "Careers", link: "" },
  { title: "Sustainability", link: "" },
];

const storeLocator: FooterMenu[] = [
  { title: "Find a Store", link: "" },
  { title: "Book an Appointment", link: "" },
  { title: "Kids", link: "" },
];

const legal: FooterMenu[] = [
  { title: "Legal Notes", link: "" },
  { title: "Terms & Conditions", link: "" },
  { title: "Privacy Policy", link: "" },
  { title: "Cookie Policy", link: "" },
  { title: "Manage Policy", link: "" },
];

const HoverLink = ({ title, link }: FooterMenu) => (
  <Link
    href={link}
    className={`relative w-fit group ${rubik.className} text-sm lg:text-base font-normal`}
  >
    {title}
    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const Footer = () => {
  return (
    <footer className="lg:px-24 lg:pt-20.5 px-5 py-10 bg-primary-500 flex flex-col gap-y-10">
      <div className="flex lg:flex-row flex-col gap-y-15 gap-x-20 text-white">
        <div className="basis-full lg:basis-[70%] flex lg:flex-row flex-col gap-y-10 lg:justify-between ">
          <div className="flex flex-col gap-y-2.5 lg:gap-y-5">
            <p className="font-bold text-lg leading-[150%]">Get Help</p>
            <div className="flex flex-col gap-y-2 lg:gap-y-4">
              {getHelp.map((item) => (
                <HoverLink key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 lg:gap-y-5">
            <p className="font-bold text-base lg:text-lg lg:leading-[150%]">
              About Novabuy
            </p>
            <div className="flex flex-col gap-y-2 lg:gap-y-4">
              {aboutNovabuy.map((item) => (
                <HoverLink key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 lg:gap-y-5">
            <p className="font-bold lg:text-lg lg:leading-[150%] text-base">
              Store Locator
            </p>
            <div className="flex flex-col gap-y-4">
              {storeLocator.map((item) => (
                <HoverLink key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 lg:gap-y-5">
            <p className="font-bold lg:text-lg lg:leading-[150%] text-base">
              Legal
            </p>
            <div className="flex flex-col gap-y-4">
              {legal.map((item) => (
                <HoverLink key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-[30%] flex flex-col gap-y-8 lg:gap-y-10">
          <div className="flex items-center justify-center lg:justify-between gap-x-10">
            {socialMenus.map((item) => (
              <Link href={item.link} key={item.alt}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={52}
                  height={52}
                  className="aspect-square w-10 h-10 lg:w-[52px] lg:h-[52px]"
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-3 lg:gap-y-6">
            <p className="font-bold lg:text-xl lg:leading-[150%] text-lg">
              SIGN UP FOR NEWSLETTER
            </p>
            <div className="flex items-center gap-x-10 justify-between py-3.5 px-5 w-full border border-white rounded-[50px]">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="lg:text-[13px] font-normal text-xs lg:leading-[150%] w-full focus-visible:transparent outline-transparent"
              />
              <ArrowLongRight />
            </div>
            <p className="text-xs lg:text-sm font-normal">
              By signing up you agree to our{" "}
              <Link href="" className="font-semibold underline">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="" className="font-semibold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/footer.webp"
          alt="footer_logo"
          width={1191}
          height={270}
          className="aspect-[1191/270]"
        />
      </div>
    </footer>
  );
};

export default Footer;