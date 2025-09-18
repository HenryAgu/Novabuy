"use client";
import Footer from "@/components/footer";
import AngleRight from "@/components/icons/angle-right";
import Navbar from "@/components/navbar";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
}

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const ProductLayout = ({ children }: ProductLayoutProps) => {
  const pathname = usePathname();

  // split path into segments and filter empty ones
  const segments = pathname.split("/").filter(Boolean);

  // build cumulative links for each segment
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: segment, href };
  });

  return (
    <main>
      <Navbar />
      <div
        className={`${rubik.className} lg:px-24 px-5 flex items-center gap-x-[8px]`}
      >
        <Link
          href="/"
          className="text-sm font-normal text-neutral-600 hover:underline"
        >
          Home
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            <AngleRight />
            {index === breadcrumbs.length - 1 ? (
              <span className="capitalize text-sm font-normal text-neutral-600">
                {crumb.label}
              </span>
            ) : (
              <div
                className="capitalize text-sm font-normal text-neutral-600"
              >
                {crumb.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default ProductLayout;
