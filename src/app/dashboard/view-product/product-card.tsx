import DeleteIcon from "@/components/icons/delete-icon";
import { ProductCard } from "@/components/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fetchProducts } from "@/lib/fetch-products";
import { db } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

type ProductCardProps = {
  product: ProductCard;
  refetch: () => void;
};

const handleDelete = async (id: string, refetch: () => void) => {
  try {
    await deleteDoc(doc(db, "products", id));
    refetch();
    toast.success("Product deleted successfully!");
  } catch (error) {
    console.error("Error deleting product:", error);
    toast.error("Failed to delete product.");
  }
};

const ProductCardComponent = ({ product,refetch }: ProductCardProps) => {
  return (
    <div className="p-3 flex flex-col gap-y-2 border border-accent rounded-lg shadow-xl">
      <div className="relative">
        <Image
          src={product.image ?? "/images/broken-image.png"}
          alt="image"
          width={573}
          height={220}
          className="w-full h-[220px] object-cover rounded-lg"
        />
        <div className="absolute top-5 right-5">
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost" className="bg-accent/100 cursor-pointer">
                <DeleteIcon />
              </Button>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                  <div className="flex items-center gap-x-2.5 mt-5">
                    <Button onClick={() => handleDelete(String(product.id),refetch)}>
                      Delete
                    </Button>
                    <DialogClose>
                      <Button type="button" variant="destructive">
                        Cancel
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
              </DialogContent>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-y-2.5">
        <p className="text-lg font-semibold text-neutral-600 capitalize">
          {product.name}
        </p>
        <p className="text-base font-medium text-neutral-600">
          $ {product?.price?.toLocaleString()}
        </p>

        <div className="flex items-center gap-x-2.5">
          <Link
            href={`/dashboard/edit-product?id=${product.id}`}
            className="bg-primary-500 text-white text-base font-normal py-1.5 px-7 rounded-xl"
          >
            Edit This Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
