import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShoppingBag from "./icons/shoppingBag";
import User from "./icons/user";
import SearchIcon from "./icons/searchIcon";

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
    link: "/men",
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
    name: "Accessories",
    link: "/accessories",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-5 lg:px-24">
      <Image
        src="/icons/Logo.svg"
        alt="Logo"
        width={177}
        height={42}
        className="aspect-[177/42]"
      />
      <ul className="flex items-center gap-12">
        {navMenu.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10">
        <button>
          <ShoppingBag />
        </button>
        <button>
          <User />
        </button>
        <button>
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
