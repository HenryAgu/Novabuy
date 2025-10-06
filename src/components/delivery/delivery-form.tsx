import React from "react";
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
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// ✅ Schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(11, { message: "Password must not be more than 11 characters." }),
});

const DeliveryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  // ✅ Submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
  };
  return (
    <Form {...form}>
      <p className={`font-bold text-lg text-neutral-600 leading-[150%]`}>
        Delivery Form
      </p>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-5 w-full flex flex-col gap-y-5 lg:gap-y-7"
      >
        <div className="flex lg:flex-row flex-col gap-y-5 gap-x-5.5 w-full">
          {/* First Name */}
          <FormField<z.infer<typeof formSchema>, "firstName">
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your First Name"
                    {...field}
                    className="w-full"
                  />
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
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Last Name"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Address */}
        <FormField<z.infer<typeof formSchema>, "address">
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Address"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex lg:flex-row flex-col gap-x-5.5 gap-y-5 w-full">
          {/* Email */}
          <FormField<z.infer<typeof formSchema>, "email">
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
                    {...field}
                    className="w-full"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField<z.infer<typeof formSchema>, "phone">
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Phone Number"
                    type="tel"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="mt-5 py-5 rounded-[50px] text-sm lg:text-base bg-primary-500 cursor-pointer"
        >
          Save & Continue
        </Button>
      </form>
    </Form>
  );
};

export default DeliveryForm;
