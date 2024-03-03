import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import DeleteProductAlerts from "@/components/Alerts/DeleteProductAlerts";
import UpdateOrderAlerts from "@/components/Alerts/UpdateOrderAlerts";
import OrderSummaryModal from "@/components/Modal/OrderSummaryModal";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <DeleteProductAlerts />
      <UpdateOrderAlerts />
      <OrderSummaryModal />
      <Sidebar />
      <div className="flex-1 max-h-screen overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
