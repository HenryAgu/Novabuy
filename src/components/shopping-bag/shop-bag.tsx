import React from "react";
import { SheetClose, SheetContent, SheetTitle } from "../ui/sheet";
import CloseIcon from "../icons/close-icon";
import ShopItems from "./shop-items";
import SummaryItems from "../check-out/summary-items";
import Total from "../check-out/total";
import { ScrollArea } from "../ui/scroll-area";

const ShopBag = () => {
  return (
    <div>
      <SheetContent
        side="top"
        className="w-full max-w-full h-full lg:w-full lg:max-w-full py-5  pb-12 lg:py-12 lg:px-24 mx-auto"
      >
        <SheetTitle className="flex items-center justify-between">
          <div />
          <SheetClose>
            <CloseIcon />
          </SheetClose>
        </SheetTitle>
        <ScrollArea className="h-full w-full">
          <section className="flex lg:flex-row flex-col gap-y-12 gap-x-24 ">
            {/* Shopped Items */}
            <ShopItems />
            {/* Summary For Checkout */}
            <div className="basis-[50%] flex flex-col w-full">
              <SummaryItems />
              <Total />
            </div>
          </section>
        </ScrollArea>
      </SheetContent>
    </div>
  );
};

export default ShopBag;
