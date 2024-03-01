import cloudinary from "@/config/cloudinary.config";
import { connectToDB } from "@/config/mongoose.config";
import { Product } from "@/lib/db/models/products.model";
import imageService from "@/lib/service/image.service";
import { generateSHA1, generateSignature, getCloudinaryId } from "@/lib/utils";
import axios from "axios";

export async function GET(req: Request, res: any) {
  const { _id } = res.params;
  await connectToDB();
  const data = await Product.findById(_id);
  return Response.json(data);
}

export async function DELETE(req: Request, res: any) {
  const { _id } = res.params;
  await connectToDB();
  const productData = await Product.findById(_id);
  if (productData) {
    const deleted = await Product.findByIdAndDelete(_id);

    for (const image of productData.images) {
      await imageService.delete(image);
    }

    return Response.json({
      message: "Product deleted successfully",
      data: deleted,
    });
  } else {
    return Response.json({ error: "Product not found" });
  }
  // return Response.json(data);
}
