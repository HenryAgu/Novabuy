"use client";
import Summary from "@/components/check-out/summary";
import DeliveryForm from "@/components/delivery/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const DeliveryPage = () => {
  return (
    <div className="">
      <Navbar />
      <main className="flex lg:flex-row flex-col lg:gap-x-20 min-h-screen lg:px-24 lg:py-10 px-5 py-8">
        <div className="basis-[60%]">
          <DeliveryForm />
        </div>
        <div className="basis-[40%]">
          <Summary />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryPage;
