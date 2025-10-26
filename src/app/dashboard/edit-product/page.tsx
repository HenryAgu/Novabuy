"use client";

import React, { Suspense } from "react";
import { Spinner } from "@/components/status/spinner";
import EditProductPage from "@/components/edit-product/edit-product-page";

export default function EditProductPageWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <Spinner size={50} />
      </div>
    }>
      <EditProductPage />
    </Suspense>
  );
}
