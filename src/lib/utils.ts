import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCloudinaryId(url: string) {
  const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

export const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

export const dateFormate = (value: string | Date = ""): string =>
  moment(value).format("DD-MM-YYYY");
