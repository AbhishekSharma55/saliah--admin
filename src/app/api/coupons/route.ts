import { connectToDB } from "@/config/mongoose.config";
import {Coupon} from "@/lib/db/models/coupons.model";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  await connectToDB();
  const data = await Coupon.find({});
  return Response.json(data);
}



export async function POST(req: Request) {
  try {
    await connectToDB();
    let data;
    const body = await req.json();

    if (mongoose.Types.ObjectId.isValid(body?._id)) {
      data = await Coupon.findOneAndUpdate(
        { _id: body?._id },
        { ...body, id: String(body?._id) },
        {
          new: true,
        }
      ).lean();

      if (data) {
        revalidatePath("/admin/dashboard/coupons?refetch=true");
        return Response.json({ ...data, type: "Updated" });
      }
    } else {
      delete body._id;
      const mongooseDoc = await Coupon.create(body);
      data = mongooseDoc.toObject();
      if (data) {
        revalidatePath("/admin/dashboard/coupons");
        return Response.json({ ...data, type: "Created" });
      } else {
        return Response.json({ error: "Something went wrong" });
      }
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong", details: error });
  }
}
