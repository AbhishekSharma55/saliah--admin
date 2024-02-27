import { ProductDataTable } from "@/components/Tables/ProductTable";
import axios from "axios";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function ProductPage() {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`,
    //   { method: "GET", cache: "no-store" }
    // );
    // const data = await res.json();

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`)

    // const data = await getData();

    return <ProductDataTable data={data} />;
}
