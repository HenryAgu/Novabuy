"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Rubik } from "next/font/google";
import Eye from "../icons/eye";
import EyeSlash from "../icons/eye-slash";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/auth-context";

// ✅ Schema
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = UserAuth();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login successful!");
      form.reset();
      router.push("/delivery");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message || "Failed to login");
      } else {
        toast.error("Failed to Login");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-2.5 lg:gap-y-5 my-4 lg:my-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Email */}
        <FormField<z.infer<typeof formSchema>, "email">
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField<z.infer<typeof formSchema>, "password">
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex items-center gap-x-5 border rounded-[50px] pr-1.5 lg:pr-2.5">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    {...field}
                    className="border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-5 py-5 rounded-[50px] text-sm lg:text-base bg-primary-500 cursor-pointer"
        >
Login
        </Button>
      </form>
      <p
        className={`${rubik.className} text-sm lg:text-base text-neutral-600 font-normal`}
      >
        Not registered yet?{" "}
        <Link href="/auth/sign-up" className="text-primary-500">
          Create an Account
        </Link>
      </p>
    </Form>
  );
}
