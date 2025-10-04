import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode; 
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex lg:flex-row flex-col">
      <div className="basis-[100%] lg:basis-[50%] min-h-screen">{children}</div>
      <div className="hidden lg:flex basis-[50%]">
        <Image
          src="/images/login.png"
          alt="login-page"
          width={760}
          height={1040}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
