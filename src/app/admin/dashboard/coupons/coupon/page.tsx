import CreateCouponForm from "@/components/Forms/CreateCouponsForm";
import axios from "axios";
import React from "react";

interface PageProps {
    params: { page: string };
    searchParams: { [key: string]: string };
}

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";
const page = async ({ searchParams }: PageProps) => {
    if (searchParams?.type === "edit" && searchParams?._id) {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/coupons/${searchParams?._id}`)
        return <div className="py-6 px-4">
            <CreateCouponForm data={data} _id={searchParams?._id || ""} />;
        </div>
    } else {
        return <div className="py-6 px-4">
            <CreateCouponForm _id={""} />
        </div>;
    }
};

export default page;
