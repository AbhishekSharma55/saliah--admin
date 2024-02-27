import { OrderTable } from "@/components/Tables/OrderTable";
import axios from "axios";
import React from "react";

export default async function page() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, {
  //   method: "GET",
  //   cache: "no-store",
  // });
  // const data = await res.json();

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`)

//   const data = await getAllOrders();
  if (data) {
    return <OrderTable data={data} />;
  } else {
    return null;
  }
}
