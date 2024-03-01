import React from "react";
import { create } from "zustand";

type DeleteProductAlert = {
  isOpen: boolean;
  onOpen: (productId: string, productName: string) => void;
  onClose: () => void;
  productId?: string;
  productName?: string;
};

export const useDeleteProduct = create<DeleteProductAlert>((set) => ({
  isOpen: false,
  onOpen: (productId, productName) =>
    set({ isOpen: true, productId, productName }),
  onClose: () => set({ isOpen: false, productId: "", productName: "" }),
}));
