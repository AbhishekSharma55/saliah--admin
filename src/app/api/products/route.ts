import { connectToDB } from "@/config/mongoose.config";
import { Product } from "@/lib/db/models/products.model";

export async function GET(req: Request) {
  await connectToDB();
  const data = await Product.find({});
  return Response.json(data);
}
