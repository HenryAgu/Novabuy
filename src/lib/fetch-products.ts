import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  category?: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
