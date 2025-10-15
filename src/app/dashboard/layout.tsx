"use client";

import Chart from "@/components/icons/chart";
import CircleAdd from "@/components/icons/circle-add";
import LogOut from "@/components/icons/log-out";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface AdminDashboardMenuItem {
  label: string;
  href: string;
  icon: ReactNode;
}

const adminDashboardMenuItems: AdminDashboardMenuItem[] = [
  { label: "Dashboard", href: "/dashboard/view-product", icon: <Chart /> },
  { label: "Add Product", href: "/dashboard/add-product", icon: <CircleAdd /> },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="flex h-screen">
      <aside className="basis-[20%] bg-white p-5 pb-10 flex flex-col justify-between border-r border-r-accent">
        <div className="flex flex-col gap-y-20">
          <Image
            src="/icons/Logo.svg"
            alt="logo"
            width={117}
            height={42}
            className="aspect-[117/42]"
          />
          <ul className="flex flex-col gap-y-5">
            {adminDashboardMenuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 w-full rounded-xl text-base font-medium flex items-center gap-x-3 transition-colors
                      ${
                        isActive
                          ? "bg-accent text-primary"
                          : "text-neutral-500 hover:bg-accent hover:text-primary"
                      }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <Link
            href=""
            className="hover:bg-accent px-5 py-2.5 w-full rounded-xl text-base font-medium text-neutral-500 flex items-center gap-x-3"
          >
            <LogOut />
            <span>Log out</span>
          </Link>
        </div>
      </aside>

      <div className="basis-[80%]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
