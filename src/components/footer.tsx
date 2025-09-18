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
  {
    image: "/icons/Twitter.svg",
    link: "",
    alt: "twitter",
  },
  {
    image: "/icons/Facebook.svg",
    link: "",
    alt: "facebook",
  },
  {
    image: "/icons/Youtube.svg",
    link: "",
    alt: "youtube",
  },
  {
    image: "/icons/Instagram.svg",
    link: "",
    alt: "instagram",
  },
];

const getHelp: FooterMenu[] = [
  { title: "Order Status", link: "" },
  { title: "Shipping & Delivery", link: "" },
  { title: "Returns", link: "" },
  { title: "Order Cancellation", link: "" },
  { title: "Payment Option", link: "" },
  { title: "FAQs", link: "" },
  { title: "Contact Us", link: "" },
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

const Footer = () => {
  return (
    <footer className="lg:px-24 lg:pt-20.5 px-5 py-5 bg-primary-500 flex flex-col gap-y-10">
      <div className="flex gap-x-20 text-white">
        <div className="basis-[70%] flex justify-between ">
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg leading-[150%]">Get Help</p>
            <div className="flex flex-col gap-y-4">
              {getHelp.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className={`${rubik.className} text-base font-normal`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg leading-[150%]">About Novabuy</p>
            <div className="flex flex-col gap-y-4">
              {aboutNovabuy.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className={`${rubik.className} text-base font-normal`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg leading-[150%]">Store Locator</p>
            <div className="flex flex-col gap-y-4">
              {storeLocator.map((item) => (
                <Link
                  href={item.link}
                    key={item.title}
                  className={`${rubik.className} text-base font-normal`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg leading-[150%]">Legal</p>
            <div className="flex flex-col gap-y-4">
              {legal.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className={`${rubik.className} text-base font-normal`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-[30%] flex flex-col gap-y-10">
          <div className="flex items-center justify-between gap-x-10">
            {socialMenus.map((item) => (
              <Link href={item.link} key={item.alt}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={52}
                  height={52}
                  className="aspect-square"
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="font-bold text-xl leading-[150%]">
              SIGN UP FOR NEWSLETTER
            </p>
            <div className="flex items-center gap-x-10 justify-between py-3.5 px-5 w-full border border-white rounded-[50px]">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="text-[13px] font-normal leading-[150%] w-full focus-visible:transparent outline-transparent"
              />
              <ArrowLongRight />
            </div>
            <p className="text-sm font-normal">
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
