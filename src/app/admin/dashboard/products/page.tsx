import { ProductDataTable } from "@/components/Tables/ProductTable";
import axios from "axios";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function ProductPage() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`
  );

  return (
    <div className="  bg-[url(/mountain.png)] min-h-full object-cover ">
      <ProductDataTable data={data} />;
    </div>
  );
}
