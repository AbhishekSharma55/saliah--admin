import { z } from "zod";

// Define Zod schema
export const ProductZodSchema = z.object({
  _id: z.string(),
  product: z.string().min(1, {
    message: "Field is required",
  }),
  price_range: z.object({
    min_price: z.string().min(1, {
      message: "Field is required",
    }),
    max_price: z.string().min(1, {
      message: "Field is required",
    }),
  }),
  shipping_info: z.string().optional(),
  quantity: z.string().min(1, {
    message: "Field is required",
  }),

  unit: z.string().min(1, {
    message: "Field is required",
  }),
  category: z.string().min(1, {
    message: "Field is required",
  }),
  homePageType: z.string().optional(),
  description: z.string().min(1, {
    message: "Field is required",
  }),
  main_description: z.string().optional(),
  varient: z
    .array(
      z.object({
        unit: z.string(),
        price_range: z
          .object({
            min_price: z.string(),
            max_price: z.string(),
          })
          .optional(),
      })
    )
    .optional(),
  additional_information: z
    .object({
      brand: z.string().optional(),
      origin: z.string().optional(),
      nutritional_info: z.object({
        calories: z.string().optional(),
        protein: z.string().optional(),
        carbohydrates: z.string().optional(),
        fat: z.string().optional(),
        weight: z.string().optional(),
      }),
      storage_instructions: z.string().optional(),
      healthy_alternative: z.string().optional(),
      flavor: z.string().optional(),
      benefits: z.string().optional(),
      delivery_info: z.string().optional(),
    })
    .optional(),
});