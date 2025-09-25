import React from "react";
import { SheetClose, SheetContent, SheetTitle } from "./ui/sheet";
import { Rubik } from "next/font/google";
import CloseIcon from "./icons/close-icon";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

interface Colour {
  name: string;
  hex: string;
}

interface Check {
  id: string;
  name?: string;
  size?: number;
}

const colours: Colour[] = [
  { name: "Black", hex: "#121212" },
  { name: "Purple", hex: "#635EF7" },
  { name: "Orange", hex: "#FF8674" },
  { name: "Grey", hex: "#E7E7E7" },
  { name: "Green", hex: "#00B400" },
  { name: "Red", hex: "#A80521" },
  { name: "Neon", hex: "#4AF5CF" },
  { name: "Lilac", hex: "#F570F9" },
  { name: "Blue", hex: "#0E4FFF" },
  { name: "Gold", hex: "#B29500" },
];

const collections: Check[] = [
  { id: crypto.randomUUID(), name: "Nova Classic Essentials" },
  { id: crypto.randomUUID(), name: "Nova Urban Streetwear Line" },
  { id: crypto.randomUUID(), name: "Nova Seasonal Delights" },
  { id: crypto.randomUUID(), name: "Nova Artisan Creations" },
  { id: crypto.randomUUID(), name: "Nova Adventure Seeker" },
  { id: crypto.randomUUID(), name: "Nova Glamour" },
  { id: crypto.randomUUID(), name: "Nova Luxe Collection" },
  { id: crypto.randomUUID(), name: "Nova Sporty Collection" },
];

const materials: Check[] = [
  { id: crypto.randomUUID(), name: "Leather" },
  { id: crypto.randomUUID(), name: "Synthetic Materials" },
  { id: crypto.randomUUID(), name: "Mesh" },
  { id: crypto.randomUUID(), name: "Knit Fabric" },
  { id: crypto.randomUUID(), name: "Flynit" },
  { id: crypto.randomUUID(), name: "Neoprene" },
  { id: crypto.randomUUID(), name: "Primeknit" },
  { id: crypto.randomUUID(), name: "Other Materials" },
];

const sizes: Check[] = [
  { id: crypto.randomUUID(), size: 38 },
  { id: crypto.randomUUID(), size: 38.5 },
  { id: crypto.randomUUID(), size: 39 },
  { id: crypto.randomUUID(), size: 39.5 },
  { id: crypto.randomUUID(), size: 40 },
  { id: crypto.randomUUID(), size: 40.5 },
  { id: crypto.randomUUID(), size: 41 },
  { id: crypto.randomUUID(), size: 41.5 },
  { id: crypto.randomUUID(), size: 42 },
  { id: crypto.randomUUID(), size: 42.5 },
  { id: crypto.randomUUID(), size: 43 },
  { id: crypto.randomUUID(), size: 43.5 },
  { id: crypto.randomUUID(), size: 44 },
  { id: crypto.randomUUID(), size: 44.5 },
  { id: crypto.randomUUID(), size: 45 },
  { id: crypto.randomUUID(), size: 45.5 },
  { id: crypto.randomUUID(), size: 46 },
  { id: crypto.randomUUID(), size: 46.5 },
  { id: crypto.randomUUID(), size: 47 },
  { id: crypto.randomUUID(), size: 47.5 },
];

const SideFilter = () => {
  return (
    <aside>
      <SheetContent className="w-full max-w-full lg:w-[45%] lg:max-w-[45%] p-5 lg:p-10">
        <SheetTitle className="flex items-center justify-between">
          <p
            className={`${rubik.className} font-normal text-base text-neutral-600 leading-[150%]`}
          >
            Clear Filter
          </p>
          <SheetClose>
            <CloseIcon />
          </SheetClose>
        </SheetTitle>
        <ScrollArea className="h-[80vh] mt-8 flex flex-col gap-y-100">
          {/* Color Section */}
          <ColorSection />
          {/* Collection Section */}
          <CollectionSection />
          {/* Size Section */}
          <SizeSection />
          {/* Materials Section */}
          <MaterialSection />
        </ScrollArea>
      </SheetContent>
    </aside>
  );
};

const ColorSection = () => {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="lg:w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-bold text-neutral-600 leading-[150%]">
            Colour
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-4">
            {colours.map((item) => (
              <div className="p-2.5 flex items-center justify-between rounded-[6px] gap-x-2.5 border border-neutral-50" key={item.name}>
                <div
                  className="w-9 h-8.5 rounded-[3px]"
                  style={{ backgroundColor: item.hex }}
                />
                <p
                  className={`${rubik.className} text-base text-neutral-600 font-normal leading-[150%]`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const CollectionSection = () => {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="lg:w-full"
        defaultValue="item-2"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold text-neutral-600 leading-[150%]">
            Collection
          </AccordionTrigger>
          <AccordionContent className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {collections.map((item) => (
              <div className="flex items-center gap-x-[11px]">
                <Checkbox />
                <p
                  className={`${rubik.className} text-base text-neutral-600 font-normal leading-[150%]`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const SizeSection = () => {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="lg:w-full"
        defaultValue="item-2"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold text-neutral-600 leading-[150%]">
            Size
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-wrap gap-2.5 w-full">
            {sizes.map((item) => (
              <Button type="button" variant="ghost" className="border border-neutral-50 rounded-0 p-2.5 h-[76px] w-[67px] flex items-center justify-center gap-y-3.5" key={item.id}>
                {item.size}
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const MaterialSection = () => {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="lg:w-full"
        defaultValue="item-2"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold text-neutral-600 leading-[150%]">
            Materials
          </AccordionTrigger>
          <AccordionContent className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {materials.map((item) => (
              <div className="flex items-center gap-x-[11px]">
                <Checkbox />
                <p
                  className={`${rubik.className} text-base text-neutral-600 font-normal leading-[150%]`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default SideFilter;
