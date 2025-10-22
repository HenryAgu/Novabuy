"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import ImageUpload from "@/components/image-upload/image-upload";

const AddProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!imageUrl) {
      toast.error("Please upload a product image!");
      return;
    }

    try {
      setLoading(true);

      // ✅ Add to Firestore including image URL
      await addDoc(collection(db, "products"), {
        ...data,
        price: Number(data.price),
        image: imageUrl, 
        createdAt: serverTimestamp(),
      });

      toast.success("Product added successfully!");
      form.reset();
      setImageUrl(""); 
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-y-8 p-6">
      <p className="text-black font-bold text-lg lg:text-[26px] lg:leading-[150%]">
        ADD PRODUCT
      </p>

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
            required
          />
        </div>

        {/* 👇 Pass handler to receive uploaded image URL */}
        <ImageUpload onUpload={setImageUrl} />

        <div className="flex flex-col gap-y-2">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Enter price"
            className="border p-2 rounded"
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
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            className="border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="shoe">Shoe</option>
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
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default AddProductPage;
