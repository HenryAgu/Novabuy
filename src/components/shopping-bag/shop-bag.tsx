import React from "react";
import { SheetClose, SheetContent, SheetTitle } from "../ui/sheet";
import CloseIcon from "../icons/close-icon";
import Summary from "../check-out/summary";
import ShopItems from "./shop-items";

const ShopBag = () => {
  return (
    <div>
      <SheetContent
        side="top"
        className="w-full max-w-full h-full lg:w-full lg:max-w-full py-5 lg:py-12 px-5 lg:px-24 mx-auto"
      >
        <SheetTitle className="flex items-center justify-between">
          <div />
          <SheetClose>
            <CloseIcon />
          </SheetClose>
        </SheetTitle>
        <section className="flex lg:flex-row flex-col gap-y-12 gap-x-24 ">
          {/* Shopped Items */}
          <ShopItems />
          {/* Summary For Checkout */}
          <Summary />
        </section>
      </SheetContent>
    </div>
  );
};

export default ShopBag;
