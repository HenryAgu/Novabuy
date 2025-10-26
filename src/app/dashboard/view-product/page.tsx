"use client";
import React from "react";
import ProductCard from "./product-card";
import { Spinner } from "@/components/status/spinner";
import { useProducts } from "@/components/context/products-context";

const ViewProductPage = () => {
  const { products, loading, fetchProducts } = useProducts();

  if (loading) {
    return (<div className="flex items-center justify-center h-screen"><Spinner size={50} /></div>);
  }

  return (
    <main className="flex flex-col gap-y-8 p-6">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        PRODUCTS{" "}
        <span className="text-base font-normal">
          ({products.length} Products)
        </span>
      </p>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              refetch={fetchProducts}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default ViewProductPage;
