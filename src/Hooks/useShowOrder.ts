import { IOrder } from "@/lib/db/models/order.model";
import React from "react";
import { create } from "zustand";

type ShowOrderSummary = {
  isOpen: boolean;
  onOpen: (order: IOrder) => void;
  onClose: () => void;
  order?: IOrder;
};

export const useShowOrder = create<ShowOrderSummary>((set) => ({
  isOpen: false,
  onOpen: (order) => set({ isOpen: true, order }),
  onClose: () => set({ isOpen: false }),
}));
