import GoogleSignup from "@/components/auth/google-signup";
import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { Rubik } from "next/font/google";
import Image from "next/image";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const LoginPage = () => {
  return (
    <div className="px-5 py-8 lg:px-20 lg:py-13 min-h-screen lg:h-full">
      <Image
        src="/icons/Logo2.svg"
        alt="logo"
        width={42}
        height={42}
        className="aspect-square lg:h-10.5 lg:w-10.5 h-8 w-8"
      />
      <div className="flex flex-col gap-y-2 my-8 lg:my-10 max-w-[393px]">
        <p className="text-2xl lg:text-4xl font-bold text-neutral-600 lg:leading-[150%]">
          Welcome Back!
        </p>
        <p
          className={`${rubik.className} lg:text-base font-normal text-neutral-400 lg:leading-[150%] text-sm`}
        >
          Please enter your credentials to access your account and explore our
          latest products.
        </p>
      </div>
      <div className="">
        <GoogleSignup />
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
