"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/components/context/auth-context";
import { Loader2 } from "lucide-react";
import Loading from "../loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ 
  children, 
  fallback = (
<Loading/>
  )
}: ProtectedRouteProps) {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user === null) {
        router.push("/auth/login");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [user, router]);

  if (user === undefined) {
    return <>{fallback}</>;
  }

  if (user === null) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
