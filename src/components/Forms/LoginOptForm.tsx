"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { loginFormSchema } from "@/lib/schemas/user-schema";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertTriangle } from "lucide-react";
import {
  loginAction,
  loginOptAction,
  sendOptAction,
} from "@/lib/actions/user-actions";
import OtpInputForm from "./OtpInputForm";
import { useUser } from "../Providers/user-provider";
import { toast } from "sonner";
import { UserRole } from "@/lib/db/models/user.model";

export default function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOptSend, setIsOptSend] = useState(false);
  const [type, setType] = useState<"email" | "phone">("phone");
  const searchParams = useSearchParams();
  const { user, dispatch } = useUser();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: type === "email" ? searchParams.get("toUser") || "" : "",
      phone: type === "phone" ? searchParams.get("toUser") || "" : "",
      rememberMe: true,
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      setIsLoading(true);
      const toUser = (type === "email" ? values?.email : values?.phone) || "";
      if (isOptSend) {
        const hash = searchParams.get("hash") || "";
        const data = await loginAction(+otp, hash, toUser);
        console.log(data);
        if (data.error) {
          setError(data.error);
        }
        if (data.user) {
          router.push("/admin/dashboard/products")
          dispatch({
            type: "LOGIN",
            payload: { ...data?.user, token: data?.token },
          });

          if (data?.user?.role === UserRole.ADMIN) {
            toast.success("Login successfully");
          } else {
            toast.error("Your are not authorized to access this page.");
          }
        }
      } else {
        setError("");
        //   // user address for notifications
        const data = await loginOptAction(toUser || "", type);
        if (data?.hash) {
          router.push(
            `/auth/login?toUser=${toUser}&message=${data?.message}&hash=${data?.hash}.${data?.expires}&type=${type}`
          );
          setIsOptSend(true);
        } else if (data?.error) {
          setError(data?.error);
        }
      }
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setIsLoading(false);
    }

  }

  const changeForm = () => {
    form.reset();
    setIsOptSend(false);
    router.replace("/auth/login");
    setTimeout(() => {
      setType((pre) => (pre === "email" ? "phone" : "email"));
    }, 500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type === "email" ? (
          <FormField
            control={form.control}
            name="email"
            disabled={isLoading}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black-800 ">Email </FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormField
            control={form.control}
            name="phone"
            disabled={isLoading}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black-800 ">Phone </FormLabel>
                <FormControl>
                  <Input type="tel" autoComplete="off" placeholder="Your Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {isOptSend && <OtpInputForm otp={otp} setOtp={setOtp} />}

        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button disabled={isLoading} type="submit" className="uppercase w-full">
          {isOptSend ? "Verify" : "Send OTP"}
        </Button>
      </form>

      <div className="mt-2">
        <span className="text-light-500">
          Instead of use
          <span
            onClick={changeForm}
            className="text-primary-500 uppercase font-semibold ml-2 cursor-pointer"
          >
            {type === "email" ? "phone" : "email"}?
          </span>{" "}
        </span>
      </div>
    </Form>
  );
}
