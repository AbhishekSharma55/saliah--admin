import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/Provider/SidebarProvider";
import { UserProvider } from "@/components/Providers/user-provider";
import { Toaster } from "sonner";
import { Suspense } from "react";

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"] });
export const metadata: Metadata = {
  title: "Saliah's Foods Admin",
  description: "Saliah's foods",
  icons: {
    icon: "/fav.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={marcellus.className}>
        <Suspense fallback={<h1>Loading....</h1>}>
          <UserProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </UserProvider>
          <Toaster position="top-right" />
        </Suspense>
      </body>
    </html>
  );
}
