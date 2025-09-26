"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShoppingBag from "./icons/shoppingBag";
import User from "./icons/user";
import SearchIcon from "./icons/searchIcon";
import MenuIcon from "./icons/menu-icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import CloseIcon from "./icons/close-icon";
import ShopBag from "./shopping-bag/shop-bag";

interface NavMenu {
  name?: string;
  link: string;
}

const navMenu: NavMenu[] = [
  {
    name: "New",
    link: "/new",
  },
  {
    name: "Men",
    link: "/products/men",
  },
  {
    name: "Women",
    link: "/women",
  },
  {
    name: "Kids",
    link: "/kids",
  },
  {
    name: "Shoes",
    link: "/products/shoes",
  },
  {
    name: "Accessories",
    link: "/accessories",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 lg:py-6 px-5 lg:px-24">
      <Link href="/">
        <Image
          src="/icons/Logo.svg"
          alt="Logo"
          width={177}
          height={42}
          className="w-[120px] h-auto lg:w-[177px] aspect-[177/42]"
        />
      </Link>

      <ul className="hidden lg:flex items-center gap-12">
        {navMenu.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5 lg:gap-10">
        <Sheet>
          <SheetTrigger>
            <ShoppingBag />
            {/* Shopping Bag content */}
          </SheetTrigger>
          <ShopBag />
        </Sheet>
        <button>
          <User />
        </button>
        <button className="hidden lg:flex">
          <SearchIcon />
        </button>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="top" className="w-full min-h-40">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

const MobileMenu = () => {
  return (
    <section className="p-5 flex flex-col gap-y-6 pb-10">
      <SheetClose className="flex justify-end">
        <CloseIcon />
      </SheetClose>
      <nav>
        <ul className="flex flex-col gap-6 text-lg">
          {navMenu.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
