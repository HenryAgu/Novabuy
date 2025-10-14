"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/auth-context";
import { toast } from "sonner";

const AvatarDropdown = () => {
  const router = useRouter();

  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("You are logged out!");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to log out");
    }
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuLabel className="text-sm font-normal text-neutral-500">
        My Account
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {user ? (
        <DropdownMenuItem onClick={handleLogout}>
          <span className="text-sm font-normal text-neutral-500">Log out</span>
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem>
          <Link
            href="/auth/login"
            className="text-sm font-normal text-neutral-500 w-full"
          >
            Login
          </Link>
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  );
};

export default AvatarDropdown;
