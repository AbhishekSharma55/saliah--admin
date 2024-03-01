"use client";
import { useDeleteProduct } from "@/Hooks/useDeleteProduct";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
const DeleteProductAlerts = () => {
  const { isOpen, onClose, productId, productName } = useDeleteProduct();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${productId}`
      );
      if (data) {
        toast.success(data.message);
        router.refresh();
      }
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger className="hidden">Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            product <span className="font-bold">({productName}) </span>
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={handleDeleteProduct}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProductAlerts;
