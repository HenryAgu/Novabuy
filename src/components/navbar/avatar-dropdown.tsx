"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const AvatarDropdown = () => {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };
    getUser();
  }, [supabase]);

  return (
    <DropdownMenuContent>
      <DropdownMenuLabel className="text-sm font-normal text-neutral-500">
        My Account
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {user ? (
        <DropdownMenuItem>
          <Link
            href="/delivery"
            className="text-sm font-normal text-neutral-500"
          >
            My delivery
          </Link>
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem>
          <Link
            href="/auth/login"
            className="text-sm font-normal text-neutral-500"
          >
            Login
          </Link>
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  );
};

export default AvatarDropdown;
