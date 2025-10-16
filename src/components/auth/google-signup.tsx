"use client";
import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import { Rubik } from "next/font/google";
import { UserAuth } from "../context/auth-context";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const GoogleSignup = () => {
  const { signInWithGoogle } = UserAuth();
  const router = useRouter();
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/delivery");
      toast.success("Successfully signed in with Google!");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error("Failed to sign in with Google. Please try again.");
    }
  };
  return (
    <section className="flex flex-col gap-y-4 lg:gap-y-8">
      <Button
        type="button"
        variant="ghost"
        className="w-full border border-[#E9E9E9] rounded-[50px] py-5 cursor-pointer"
        onClick={handleSignInWithGoogle}
      >
        <GoogleIcon className="w-7 h-8" />
        <span
          className={`${rubik.className} text-sm lg:text-base font-normal text-neutral-600`}
        >
          Login with Google
        </span>
      </Button>
      <div className="flex items-center w-full gap-2 whitespace-nowrap">
        <div className="h-[1px] bg-[#d9d9d9] flex-1" />
        <span
          className={`${rubik.className} text-sm lg:text-base text-neutral-200 font-normal leading-[150%]`}
        >
          or login with
        </span>
        <div className="h-[1px] bg-[#d9d9d9] flex-1" />
      </div>
    </section>
  );
};

export default GoogleSignup;
