import { OrderTable } from "@/components/Tables/OrderTable";
import axios from "axios";
import React from "react";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function page() {

  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`)

  //   const data = await getAllOrders();
  if (data) {
    return <OrderTable data={data} />;
  } else {
    return null;
  }
}
