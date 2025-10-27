"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusIcon from "../icons/bus-icon";
import Location from "../icons/location";
import ShipForm from "./ship-form";
import PickupForm from "./pickup-form";

const DeliveryForm = () => {
  return (
    <div>
      <p className={`font-bold text-lg text-neutral-600 leading-[150%]`}>
        Delivery Option
      </p>
      <Tabs defaultValue="ship" className="w-full my-10">
        <TabsList className="mb-8 w-full">
          <TabsTrigger value="ship">
            <BusIcon stroke="currentColor"/>
            <span className="font-normal text-base ">Ship</span>
          </TabsTrigger>
          <TabsTrigger value="pickup">
            <Location stroke="currentColor"/>
            <span className="font-normal text-base ">Pick Up</span>
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
