import { CouponDataTable } from "@/components/Tables/CouponTable";
import axios from "axios";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function CouponRange() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/coupons`
  );

  return (
    <div className="  bg-[url(/mountain.png)] min-h-full object-cover ">
      <CouponDataTable data={data} />;
    </div>
  );
}
