import Items from "@/components/check-out/summary-items";
import DeliveryForm from "@/components/delivery/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ProtectedRoute from "@/components/auth/protected-route";
import React from "react";

const DeliveryPage = () => {
  return (
    <ProtectedRoute>
      <div className="">
        <Navbar />
        <main className="flex lg:flex-row flex-col lg:gap-x-20 gap-y-10 lg:min-h-screen lg:px-24 lg:py-10 px-5 py-8">
          <div className="basis-[60%]">
            <DeliveryForm />
          </div>
          <div className="basis-[40%]">
            <Items />
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default DeliveryPage;
