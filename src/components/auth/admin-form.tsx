"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import EyeSlash from "../icons/eye-slash";
import Eye from "../icons/eye";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(1, { message: "Email is required." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const AdminForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (data.password === "admin@123" && data.username === "admin") {
      localStorage.setItem("isAdmin", "true");
      redirect("/dashboard/product");
    } else {
      toast.error("Invalid Credentials");
    }
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2.5 lg:gap-y-5 my-4 lg:my-8"
      >
        {/* Username */}
        <FormField<z.infer<typeof formSchema>, "username">
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  {...field}
                />
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
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AdminForm;
