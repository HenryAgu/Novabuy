"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import ImageUpload from "@/components/image-upload/image-upload";
import { Spinner } from "@/components/status/spinner";
import Link from "next/link";
import { useProducts } from "@/components/context/products-context";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  category?: string;
}

const EditProductPage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [product, setProduct] = useState<Product | null>(null);
  const [fetching, setFetching] = useState(true);
  const { updateProduct, getProductById, loading } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("id");

  useEffect(() => {
    const fetchProduct = () => {
      if (!productId) {
        toast.error("No product ID provided");
        router.push("/dashboard/view-product");
        return;
      }

      const productData = getProductById(productId);
      
      if (!productData) {
        toast.error("Product not found");
        router.push("/dashboard/view-product");
        return;
      }

      setProduct(productData);
      setImageUrl(productData.image || "");
      setFetching(false);
    };

    fetchProduct();
  }, [productId, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!productId) {
      toast.error("No product ID provided");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!imageUrl) {
      toast.error("Please upload a product image!");
      return;
    }

    try {
      await updateProduct(productId, {
        name: data.name as string,
        price: Number(data.price),
        image: imageUrl,
        description: data.description as string,
        category: data.category as string,
      });

      router.push("/dashboard/view-product");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={50} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Product not found</p>
          <Link 
            href="/dashboard/view-product"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-y-8 p-6">
      <div className="flex items-center justify-between">
        <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
          EDIT PRODUCT
        </p>
        <Link 
          href="/dashboard/view-product"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to Products
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[50%] flex flex-col gap-y-4"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Product Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter product name"
            className="border p-2 rounded"
            defaultValue={product.name}
            required
          />
        </div>

        {/* Image Upload - show current image if exists */}
        <div className="flex flex-col gap-y-2">
          <label>Product Image:</label>
          {product.image && (
            <div className="mb-2">
              <p className="text-sm text-gray-600 mb-2">Current image:</p>
              <img 
                src={product.image} 
                alt="Current product" 
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          )}
          <Suspense fallback={<Spinner size={20} />}>
            <ImageUpload onUpload={setImageUrl} />
          </Suspense>
          <p className="text-sm text-gray-500">
            {imageUrl ? "New image selected" : "Upload a new image or keep current"}
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Enter price"
            className="border p-2 rounded"
            defaultValue={product.price}
            required
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Enter product description"
            className="border p-2 rounded"
            defaultValue={product.description || ""}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            className="border p-2 rounded"
            defaultValue={product.category || ""}
            required
          >
            <option value="">Select Category</option>
            <option value="shoe">Shoe</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="clothes">Clothes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"
          } text-white py-2 px-4 rounded`}
        >
          {loading ? <Spinner size={10} /> : "Update Product"}
        </button>
      </form>
    </main>
  );
};

export default EditProductPage;
