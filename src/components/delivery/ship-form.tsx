import React from "react";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

// ✅ Schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  lastName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
    phone: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const onSubmit = async (data: z.infer<typeof formSchema>) => {};

const ShipForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      lastName: "",
      location: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8"
      >
        <div className="flex items-center gap-x-5.5">
          {/* First Name */}
          <FormField<z.infer<typeof formSchema>, "firstName">
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField<z.infer<typeof formSchema>, "lastName">
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Location */}
        <FormField<z.infer<typeof formSchema>, "location">
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full gap-y-3">
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-x-5.5">
          {/* Email */}
          <FormField<z.infer<typeof formSchema>, "email">
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField<z.infer<typeof formSchema>, "phone">
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="p-2.5 mt-5 rounded-[50px] bg-primary-500 text-white text-base font-normal cursor-pointer">Save & Continue</Button>
      </form>
    </Form>
  );
};

export default ShipForm;
