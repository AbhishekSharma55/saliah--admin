import React from "react";
import { create } from "zustand";

type DeleteCouponAlert = {
  isOpen: boolean;
  onOpen: (couponId: string, couponName: string) => void;
  onClose: () => void;
  couponId?: string;
  couponName?: string;
};

export const useDeleteCoupon = create<DeleteCouponAlert>((set) => ({
  isOpen: false,
  onOpen: (couponId, couponName) =>
    set({ isOpen: true, couponId, couponName }),
  onClose: () => set({ isOpen: false, couponId: "", couponName: "" }),
}));
