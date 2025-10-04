import { Rubik } from "next/font/google";
import Image from "next/image";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const SignUpPage = () => {
  return (
    <div
      className="p-5 lg:p-20 min-h-screen lg:h-full"

    >
      <Image
        src="/icons/Logo2.svg"
        alt="logo"
        width={42}
        height={42}
        className="aspect-square"
      />
      <div
        className="flex flex-col gap-y-2 my-10"
        style={{ maxWidth: "393px" }}
      >
        <p className="text-4xl font-bold text-neutral-600 leading-[150%]">
          Welcome Back!
        </p>
        <p
          className={`${rubik.className} text-base font-normal text-neutral-400 leading-[150%]`}
        >
          Please enter your credentials to access your account and explore our
          latest products.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
