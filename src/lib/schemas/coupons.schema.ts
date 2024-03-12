import { z } from "zod";

// Define Zod schema
export const CouponZodSchema = z.object({
  _id: z.string(),
  coupon: z.string().min(1, {
    message: "Field is required",
  }),
  discount: z.string().min(1, {
    message: "Field is required",
  }),

  maximum_discount: z.string().min(1, {
    message: "Field is required",
  }),
});