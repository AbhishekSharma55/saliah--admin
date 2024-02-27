import { connectToDB } from "@/config/mongoose.config";
import { OrderModel } from "@/lib/db/models/order.model";
import { Product } from "@/lib/db/models/products.model";
import mongoose from "mongoose";

export async function GET(req: Request) {
  await connectToDB();
  const data = await OrderModel.find({});
  return Response.json(data);
}
