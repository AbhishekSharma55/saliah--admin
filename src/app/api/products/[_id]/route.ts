import { connectToDB } from "@/config/mongoose.config";
import { Product } from "@/lib/db/models/products.model";

export async function GET(req: Request, res: any) {
  const { _id } = res.params;
  await connectToDB();
  const data = await Product.findById(_id);
  return Response.json(data);
}
