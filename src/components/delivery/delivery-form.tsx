"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusIcon from "../icons/bus-icon";
import Location from "../icons/location";
import ShipForm from "./ship-form";
import PickupForm from "./pickup-form";

const DeliveryForm = () => {
  return (
    <div className="px-5 lg:px-0">
      <p className={`font-bold text-base lg:text-lg text-neutral-600 leading-[150%]`}>
        Delivery Option
      </p>
      <Tabs defaultValue="ship" className="w-full my-5 lg:my-10">
        <TabsList className="mb-5 lg:mb-8 w-full">
          <TabsTrigger value="ship">
            <BusIcon stroke="currentColor"/>
            <span className="font-normal lg:text-base text-sm">Ship</span>
          </TabsTrigger>
          <TabsTrigger value="pickup">
            <Location stroke="currentColor"/>
            <span className="font-normal lg:text-base text-sm">Pick Up</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ship" >
          <ShipForm/>
        </TabsContent>
        <TabsContent value="pickup"><PickupForm/></TabsContent>
      </Tabs>
    </div>
  );
};

export default DeliveryForm;
