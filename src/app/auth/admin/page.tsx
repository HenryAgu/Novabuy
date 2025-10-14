import AdminForm from "@/components/auth/admin-form";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const AdminPage = () => {
  return (
    <div className="px-5 py-8 lg:px-20 lg:py-13 min-h-screen lg:h-full">
      <Link href="/">
        <Image
          src="/icons/Logo2.svg"
          alt="logo"
          width={42}
          height={42}
          className="aspect-square lg:h-10.5 lg:w-10.5 h-8 w-8 flex justify-center items-center"
        />
      </Link>
      <div className="flex flex-col gap-y-2 my-8 lg:my-10">
        <p className="text-2xl lg:text-4xl font-bold text-neutral-600 lg:leading-[150%]">
          Welcome Back, Admin!
        </p>
      </div>
      <AdminForm />
    </div>
  );
};

export default AdminPage;
