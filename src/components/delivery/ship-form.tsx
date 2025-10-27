"use client";
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
  firstName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
  lastName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  postalCode: z.string().min(2, { message: "Postal code must be at least 2 characters." }),
  phone: z.string().min(2, { message: "Phone number must be at least 2 characters." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
});

const ShipForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      location: "",
      city: "",
      state: "",
      postalCode: "",
      email: "",
      phone: "",
    },
  });

  // ✅ Move onSubmit here so it’s in the same scope as the form
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("shipping data", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8"
      >
        <div className="flex items-center gap-x-5.5">
          <FormField
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

          <FormField
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

        <FormField
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
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your state" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Postal Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center gap-x-5.5">
          <FormField
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

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="p-2.5 mt-5 rounded-[50px] bg-primary-500 text-white text-base font-normal cursor-pointer"
        >
          Save & Continue
        </Button>
      </form>
    </Form>
  );
};

export default ShipForm;
