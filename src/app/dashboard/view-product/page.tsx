"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { fetchProducts } from "@/lib/fetch-products";
import Loading from "@/components/loading";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  category?: string;
}

const ViewProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Move loadProducts outside useEffect
  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <Loading />;
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
              refetch={loadProducts} // ✅ now properly passed
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default ViewProductPage;
