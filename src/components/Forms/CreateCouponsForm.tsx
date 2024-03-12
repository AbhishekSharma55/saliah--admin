"use client";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CouponSchema } from "@/lib/db/models/coupons.model";
import axios from "axios";
import { SidebarButton } from "../Provider/SidebarProvider";
import { CouponZodSchema } from "@/lib/schemas/coupons.schema";
const CreateUpdateForm = ({
  _id,
  data,
}: {
  _id?: string;
  data?: CouponSchema;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof CouponZodSchema>>({
    resolver: zodResolver(CouponZodSchema),
    defaultValues: {
      _id: _id || "",
      maximum_discount: String(data?.maximum_discount) || "",
      discount: String(data?.discount) || "",
      coupon: data?.coupon || ""
    }
  });

  const onSubmit = async (values: z.infer<typeof CouponZodSchema>) => {
    try {
      console.log(values);
      setIsLoading(true);
      
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/coupons`,
        values
      );
      const resData: CouponSchema | any = data;
      if (resData?._id) {
        toast.success(`Coupon has been ${resData?.type} successfully`);
        setTimeout(() => {
          router.replace("/admin/dashboard/coupons?refetch=" + Date.now());
        }, 1500);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SidebarButton />
      <h2>Coupon info</h2>

      <Form {...form}>
        <form
          id="createForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <FormField
              control={form.control}
              name="maximum_discount"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black-800 ">
                    Maximum Discount(₹)
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1999.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black-800 ">
                    Discount(%)
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coupon"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black-800 ">
                    Coupon
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter coupon code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <div className="flex justify-between items-end  ">
            <Button form="createForm" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default CreateUpdateForm;