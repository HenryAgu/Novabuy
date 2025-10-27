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
import Info from "../icons/info";

// ✅ Schema
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  phone: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

const PickupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      location: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("pick up form", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 lg:gap-y-8"
      >
        {/* Location */}
        <div className="flex flex-col gap-y-3">
          <FormField<z.infer<typeof formSchema>, "location">
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full gap-y-3">
                <FormLabel>Select Store Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-1.5 lg:gap-x-3">
            <Info className="flex shrink-0"/>
            <span className="text-sm lg:text-base text-neutral-300 font-normal">
              Using a specific location such as a home address or postcode will
              get the most accurate results.
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5.5">
          {/* Email */}
          <FormField<z.infer<typeof formSchema>, "email">
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full gap-y-1.5 lg:gap-y-3">
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
              <FormItem className="w-full gap-y-1.5 lg:gap-y-3">
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
          className="p-2.5 mt-5 rounded-[50px] bg-primary-500 text-white text-base font-normal cursor-pointer"
        >
          Save & Continue
        </Button>
      </form>
    </Form>
  );
};

export default PickupForm;
