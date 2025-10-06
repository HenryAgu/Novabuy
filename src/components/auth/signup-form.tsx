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
import { useState } from "react";

// ✅ Schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
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

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // ✅ Submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2.5 lg:gap-y-5 my-4 lg:my-8"
      >
        {/* Name */}
        <FormField<z.infer<typeof formSchema>, "name">
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                <div className="flex items-center gap-x-5 border rounded-[50px] pr-0.5 lg:pr-2.5">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    {...field}
                    className="border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                  />

                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </Button>
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
          Sign Up
        </Button>
      </form>
      <p
        className={`${rubik.className} text-sm lg:text-base text-neutral-600 font-normal`}
      >
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary-500">
          Sign In
        </Link>
      </p>
    </Form>
  );
}
