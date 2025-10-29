import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const SuccessPage = () => {
  return (
    <main className="flex items-center justify-center h-screen px-5">
      <div className=" max-w-full lg:max-w-[446px] px-6 lg:px-10.5 py-5 lg:py-8 border-[0.5px] border-[#E0E0E0] rounded-4xl shadow-[3px_3px_15px_0_rgba(209,209,209,0.3)] flex flex-col gap-y-8 bg-white">
        {/* Success message */}
        <div className="flex flex-col items-center gap-y-3">
          <Image
            src="/images/check.svg"
            alt="check"
            width={120}
            height={120}
            className="aspect-square"
          />
          <div className="flex flex-col text-center gap-y-1">
            <p className="text-black font-semibold text-2xl leading-[150%]">
              Payment Successful
            </p>
            <p className="text-[#878787] font-normal text-sm leading-[150%]">
              Your order is on its way to you.
            </p>
          </div>
        </div>

        {/* Order summary */}
        <div className="border-[0.5px] border-[#E0E0E0] rounded-4xl py-6">
          <div className="pb-4 px-4 border-b border-[#E0E0E0]">
            <p className="text-base text-black font-semibold leading-[150%]">
              Order Summary
            </p>
          </div>

          <div className="px-4 pt-4">
            <table className="w-full border-collapse text-sm">
              <tbody className="text-[#878787] font-normal leading-[150%]">
                <tr className="border-b border-[#E0E0E0] border-dotted">
                  <td className="py-3 text-xs ">Product Name</td>
                  <td className="py-3 text-black text-xs text-right font-medium w-[80%]">
                    Male Sport Shoe (Louis Vuitton)
                  </td>
                </tr>

                <tr className="border-b border-[#E0E0E0] border-dotted">
                  <td className="py-3 text-xs ">Price</td>
                  <td className="py-3 text-black text-xs text-right font-medium">
                    ₦ 5,600
                  </td>
                </tr>

                <tr className="border-b border-[#E0E0E0] border-dotted">
                  <td className="py-3 text-xs ">Category</td>
                  <td className="py-3 text-black text-xs text-right font-medium">
                    Shoes
                  </td>
                </tr>

                <tr>
                  <td className="py-3 align-top text-xs">Location</td>
                  <td className="py-3 text-black text-xs text-right font-medium leading-[150%]">
                    Creed Lounge, Apara Road, <br /> Port Harcourt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Button className="w-fit mt-10 mx-auto rounded-3xl bg-primary-500 text-white tracking-tighter text-sm py-4 px-8 font-semibold leading-[150%]">
          Continue Shopping
        </Button>
      </div>
    </main>
  );
};

export default SuccessPage;
