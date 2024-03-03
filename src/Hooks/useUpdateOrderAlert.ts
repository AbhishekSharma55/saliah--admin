import { IOrder } from "@/lib/db/models/order.model";
import React from "react";
import { create } from "zustand";

type OrderStatus = {
  status: string;
  paymentStatus: string;
};
type showUpdateOrderAlerts = {
  isOpen: boolean;
  onOpen: (s: OrderStatus, order: IOrder) => void;
  onClose: () => void;
  order?: IOrder;
  orderStatus?: OrderStatus;
};

export const useUpdateOrderAlert = create<showUpdateOrderAlerts>((set) => ({
  isOpen: false,
  onOpen: (s, o) => set({ isOpen: true, order: o, orderStatus: s }),
  onClose: () => set({ isOpen: false }),
}));
