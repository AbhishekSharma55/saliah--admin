import { connectToDB } from "@/config/mongoose.config";
import { OrderModel } from "@/lib/db/models/order.model";
import { Product } from "@/lib/db/models/products.model";
import mongoose from "mongoose";

export async function GET(req: Request) {
  await connectToDB();
  const data = await OrderModel.find({});
  return Response.json(data);
}

export async function POST(req: Request) {
  await connectToDB();
  const body = await req.json();
  if (!body?._id) {
    return Response.json({ error: "Invalid order id." });
  }

  const findProduct = await OrderModel.findById(body?._id);
  if (!findProduct) {
    return Response.json({ error: "Order not found." });
  }
  const copyData = { ...body };

  if (!copyData.status) {
    delete copyData.status;
  }
  if (!copyData.paymentStatus) {
    delete copyData.paymentStatus;
  }

  const data = await OrderModel.findOneAndUpdate(
    { _id: body?._id },
    { ...copyData },
    {
      new: true,
    }
  );

  return Response.json({ data, message: "Order updated successfully." });
}
