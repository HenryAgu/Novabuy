"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { db } from "@/lib/firebase";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp,
  query,
  orderBy 
} from "firebase/firestore";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  link?: string;
  description?: string;
  category?: string;
  createdAt?: any;
  updatedAt?: any;
}

interface ProductsContextType {
  // State
  products: Product[];
  loading: boolean;
  error: string | null;
  
  // Actions
  fetchProducts: () => Promise<void>;
  addProduct: (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateProduct: (id: string, productData: Partial<Omit<Product, 'id' | 'createdAt'>>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProductById: (id: string) => Product | undefined;
  
  // Utility
  clearError: () => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      
      setProducts(productsData);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const docRef = await addDoc(collection(db, "products"), {
        ...productData,
        createdAt: serverTimestamp(),
      });

      // Add the new product to local state
      const newProduct: Product = {
        id: docRef.id,
        ...productData,
        createdAt: new Date(),
      };

      setProducts(prev => [newProduct, ...prev]);
      toast.success("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product");
      toast.error("Failed to add product!");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: Partial<Omit<Product, 'id' | 'createdAt'>>) => {
    try {
      setLoading(true);
      setError(null);

      const productRef = doc(db, "products", id);
      await updateDoc(productRef, {
        ...productData,
        updatedAt: new Date(),
      });

      // Update the product in local state
      setProducts(prev => 
        prev.map(product => 
          product.id === id 
            ? { ...product, ...productData, updatedAt: new Date() }
            : product
        )
      );
      
      toast.success("Product updated successfully!");
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Failed to update product");
      toast.error("Failed to update product!");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      await deleteDoc(doc(db, "products", id));

      // Remove the product from local state
      setProducts(prev => prev.filter(product => product.id !== id));
      toast.success("Product deleted successfully!");
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Failed to delete product");
      toast.error("Failed to delete product!");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  const value: ProductsContextType = {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    clearError,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
