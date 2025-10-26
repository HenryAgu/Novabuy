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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useProducts } from "@/components/context/products-context";

type ProductCardProps = {
  product: ProductCard;
  refetch: () => void;
};

const ProductCardComponent = ({ product, refetch }: ProductCardProps) => {
  const { deleteProduct } = useProducts();

  const handleDelete = async () => {
    try {
      await deleteProduct(String(product.id));
      refetch();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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

            <DialogTrigger asChild>
              <Button variant="ghost" className="bg-accent/100 cursor-pointer">
                <DeleteIcon />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your product and remove it from the database.
                </DialogDescription>

                <div className="flex items-center gap-x-2.5 mt-5">
                  <Button onClick={handleDelete}>
                    Delete
                  </Button>

                  <DialogClose asChild>
                    <Button type="button" variant="destructive">
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-y-1.5">
        <span className="capitalize text-xs text-neutral-600">{product?.category}</span>
        <p className="text-lg font-semibold text-neutral-600 capitalize">
          {product.name}
        </p>
        <p className="text-base font-medium text-neutral-600">
          $
          {new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
          }).format(product?.price ?? 0)}
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
