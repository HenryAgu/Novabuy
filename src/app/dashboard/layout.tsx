import Image from "next/image";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="flex h-screen">
      <aside className="basis-[25%] bg-amber-400">
        <Image
          src="/icons/Logo2.svg"
          alt="logo"
          width={42}
          height={42}
          className="aspect-square lg:h-10.5 lg:w-10.5 h-8 w-8"
        />
      </aside>
      <div className="basis-[75%]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
