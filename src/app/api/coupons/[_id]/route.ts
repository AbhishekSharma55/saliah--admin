import cloudinary from "@/config/cloudinary.config";
import { connectToDB } from "@/config/mongoose.config";
import { Coupon } from "@/lib/db/models/coupons.model";
import imageService from "@/lib/service/image.service";
import { generateSHA1, generateSignature, getCloudinaryId } from "@/lib/utils";
import axios from "axios";

export async function GET(req: Request, res: any) {
  const { _id } = res.params;
  await connectToDB();
  const data = await Coupon.findById(_id);
  return Response.json(data);
}

export async function DELETE(req: Request, res: any) {
  const { _id } = res.params;
  await connectToDB();
  const couponData = await Coupon.findById(_id);
  if (couponData) {
    const deleted = await Coupon.findByIdAndDelete(_id);
    return Response.json({
      message: "Coupon deleted successfully",
      data: deleted,
    });
  } else {
    return Response.json({ error: "Coupon not found" });
  }
}
