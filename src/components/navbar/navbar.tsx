"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShoppingBag from "../icons/shoppingBag";
import User from "../icons/user";
import SearchIcon from "../icons/searchIcon";
import MenuIcon from "../icons/menu-icon";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import CloseIcon from "../icons/close-icon";
import ShopBag from "../shopping-bag/shop-bag";
import { useCartStore } from "@/stores/cart-stores";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import AvatarDropdown from "./avatar-dropdown";

interface NavMenu {
  name?: string;
  link: string;
}

const navMenu: NavMenu[] = [
  // {
  //   name: "New",
  //   link: "/new",
  // },
  {
    name: "Men",
    link: "/products/men",
  },
  // {
  //   name: "Women",
  //   link: "/women",
  // },
  // {
  //   name: "Kids",
  //   link: "/kids",
  // },
  {
    name: "Shoes",
    link: "/products/shoes",
  },
  // {
  //   name: "Accessories",
  //   link: "/accessories",
  // },
];

const Navbar = () => {
  const totalItems = useCartStore((state) => state.items);

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
            <Link
              href={item.link}
              className="text-sm lg:text-base font-normal text-neutral-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2.5 lg:gap-5 relative">
        <Sheet>
          <SheetTrigger>
            <ShoppingBag />
            {totalItems.length > 0 && (
              <span className="absolute -top-2 left-2.5 bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems.length}
              </span>
            )}
          </SheetTrigger>
          <ShopBag />
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User />
          </DropdownMenuTrigger>
          <AvatarDropdown />
        </DropdownMenu>
        <button className="hidden lg:block">
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
              <Link
                href={item.link}
                className="text-sm font-normal text-neutral-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
