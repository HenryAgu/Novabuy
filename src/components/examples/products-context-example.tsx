"use client";

import React from "react";
import { useProducts } from "@/components/context/products-context";
import { Spinner } from "@/components/status/spinner";

/**
 * Example component showing how to use the Products Context
 * This demonstrates all the available functionality
 */
const ProductsContextExample = () => {
  const {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    clearError,
  } = useProducts();

  // Example: Get a specific product by ID
  const getProduct = (id: string) => {
    const product = getProductById(id);
    console.log("Product:", product);
  };

  // Example: Add a new product
  const handleAddProduct = async () => {
    try {
      await addProduct({
        name: "Example Product",
        price: 99.99,
        image: "https://example.com/image.jpg",
        description: "This is an example product",
        category: "example",
      });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  // Example: Update a product
  const handleUpdateProduct = async (id: string) => {
    try {
      await updateProduct(id, {
        name: "Updated Product Name",
        price: 149.99,
      });
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  // Example: Delete a product
  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  if (loading) {
    return <Spinner size={50} />;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <p>Error: {error}</p>
        <button 
          onClick={clearError}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Error
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products Context Example</h2>
      
      <div className="mb-4">
        <button 
          onClick={fetchProducts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Refresh Products
        </button>
        <button 
          onClick={handleAddProduct}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Example Product
        </button>
      </div>

      <div className="mb-4">
        <p className="text-lg">Total Products: {products.length}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            
            <div className="mt-2 space-x-2">
              <button 
                onClick={() => handleUpdateProduct(product.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
              >
                Update
              </button>
              <button 
                onClick={() => handleDeleteProduct(product.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContextExample;
