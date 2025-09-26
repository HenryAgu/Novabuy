import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Rubik } from "next/font/google";
import QuestionIcon from "../icons/question-icon";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const Summary = () => {
  return (
    <div className="basis-[50%]">
      <p className={`font-bold text-lg text-neutral-600 leading-[150%]`}>
        Summary
      </p>
      <ScrollArea className="my-5 max-w-full lg:max-w-[500px] lg:h-[70vh] h-[20vh]">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%] flex items-center gap-x-3.5`}
            >
              <span>Sub Total</span>
              <QuestionIcon />
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ 131,500
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%]`}
            >
              Shipping
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ 4,500
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`${rubik.className} text-base font-normal leading-[150%] flex items-center gap-x-3.5`}
            >
              <span>Taxes</span>
              <QuestionIcon />
            </p>
            <p className="text-neutral-500 text-base font-normal leading-[150%]">
              ₦ 0
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between my-5 py-2.5 border-t border-t-[#D3D3D3]">
          <p
            className={`${rubik.className} text-neutral-600 text-xl font-normal`}
          >
            Total
          </p>
          <p className="text-neutral-600 font-bold text-xl leading-[150%]">
            ₦ 136,000
          </p>
        </div>
        <Button
          type="button"
          variant="default"
          className="my-10 w-full bg-primary-500 text-white rounded-[50px]  text-base font-normal leading-[150%]"
        >
          Continue CheckOut
        </Button>
      </ScrollArea>
    </div>
  );
};

export default Summary;
