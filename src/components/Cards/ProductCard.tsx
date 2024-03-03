import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { IOrder } from "@/lib/db/models/order.model";

type ProductCardProps = IOrder["orderSummary"][number];
const ProductCard = ({
  image,
  name,
  price,
  quantity,
  total,
  _id,
  productId,
  subTotal,
  unit,
}: ProductCardProps) => {
  return (
    <div className=" flex-1 min-w-96 rounded-md border-primary/40 border-2">
      <div className="flex flex-1 p-4">
        <Image
          width={50}
          height={50}
          alt={name as string}
          src={image || "/svg/logo.svg"}
          className="object-contain"
        />
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
          <span className="text-base block col-span-3 justify-between lg:col-span-3 ">{name}</span>
          <span className="text-base">
            Unit: <span className="text-primary"> {unit || "Not given"}</span>
          </span>
          <span className="text-base">
            Price: <span className="text-primary"> {price}</span>
          </span>
          <span className="text-base">
            Qty: <span className="text-primary"> {quantity}</span>
          </span>
          <span className="text-base">
            Sub Total: <span className="text-primary"> {subTotal}</span>
          </span>
          <span className="text-base">
            Total: <span className="text-primary"> {total}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
