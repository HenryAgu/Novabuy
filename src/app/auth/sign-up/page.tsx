import GoogleSignup from "@/components/auth/google-signup";
import { SignUpForm } from "@/components/auth/signup-form";
import { Rubik } from "next/font/google";
import Image from "next/image";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const SignUpPage = () => {
  return (
    <div className="p-5 lg:px-20 lg:py-13 min-h-screen lg:h-full">
      <Image
        src="/icons/Logo2.svg"
        alt="logo"
        width={42}
        height={42}
        className="aspect-square"
      />
      <div className="flex flex-col gap-y-2 my-10 max-w-[393px]">
        <p className="text-2xl lg:text-4xl font-bold text-neutral-600 lg:leading-[150%]">
          Join Our Community
        </p>
        <p
          className={`${rubik.className} lg:text-base font-normal text-neutral-400 lg:leading-[150%] text-sm`}
        >
          Create an Account to Unlock Exclusive Benefits and Seamless Shopping.
        </p>
      </div>
      <div className="">
        <GoogleSignup/>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
