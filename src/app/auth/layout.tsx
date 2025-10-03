import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex lg:flex-row flex-col">
      <div className="lg:basis-[50%]">{children}</div>
      <div className="basis-[50%]">
        <Image
          src="/images/login.png"
          alt="login-page"
          width={760}
          height={1040}
          className="w-full h-full hidden lg:block"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
