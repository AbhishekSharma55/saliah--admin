"use client";
import React from "react";
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
import { useUpdateOrderAlert } from "@/Hooks/useUpdateOrderAlert";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useShowOrder } from "@/Hooks/useShowOrder";

const UpdateOrderAlerts = () => {
  const { isOpen, onClose, order, orderStatus } = useUpdateOrderAlert();
  const { onClose: modalOnClose } = useShowOrder();
  const router = useRouter();
  const handleUpdateOrderStatus = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`,
      {
        status: orderStatus?.status,
        paymentStatus: orderStatus?.paymentStatus,
        _id: order?._id,
      }
    );

    if (data?.error) {
      toast.error(String(data.error));

      return;
    } else if (data?.data) {
      toast.success(String(data.message));
      router.refresh();
      onClose();
      modalOnClose();
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure you want to update the status?
          </AlertDialogTitle>
          {orderStatus?.paymentStatus && (
            <AlertDialogDescription>
              Are you sure you want to update the{" "}
              <span className="text-primary">payment status</span> from &quot;
              {order?.paymentStatus}&quot; to &quot;{orderStatus.paymentStatus}&quot;?
            </AlertDialogDescription>
          )}
          {orderStatus?.status && (
            <AlertDialogDescription>
              Are you sure you want to update the{" "}
              <span className="text-primary">delivery status</span> from &quot;
              {order?.status}&quot; to &quot;{orderStatus?.status}&quot;?
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleUpdateOrderStatus}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateOrderAlerts;
