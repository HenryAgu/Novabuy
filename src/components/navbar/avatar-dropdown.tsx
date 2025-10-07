import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import Link from "next/link";

const AvatarDropdown = () => {
  return (
    <div>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-sm font-normal text-neutral-500">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <Link href="/auth/login" className="text-sm font-normal text-neutral-500">Login</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </div>
  );
};

export default AvatarDropdown;
