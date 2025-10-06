import Items from "@/components/check-out/summary-items";
import DeliveryForm from "@/components/delivery/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const DeliveryPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  console.log(data);

  return (
    <div className="">
      <Navbar />
      <main className="flex lg:flex-row flex-col lg:gap-x-20 min-h-screen lg:px-24 lg:py-10 px-5 py-8">
        <div className="basis-[60%]">
          <DeliveryForm />
        </div>
        <div className="basis-[40%]">
          <Items />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryPage;
