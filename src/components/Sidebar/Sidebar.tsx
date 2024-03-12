"use client";
import Link from "next/link";
import { SidebarButton, useSidebar } from "../Provider/SidebarProvider";
import Package2Icon from "@/Icons/Package2Icon";
import HomeIcon from "@/Icons/HomeIcon";
import ShoppingCartIcon from "@/Icons/ShoppingCartIcon";
import PackageIcon from "@/Icons/PackageIcon";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/lib/actions/user-actions";
import { useUser } from "@/components/Providers/user-provider";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();
  const pathname = usePathname();
  const { user, dispatch } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
    await logoutAction();
    router.replace("/auth/login");
  };

  return (
    <aside
      className={` bg-gray-100 dark:bg-gray-800 z-10 fixed top-0 bottom-0  h-screen group/sidebar lg:relative transition-all overflow-x-hidden ease-in-out duration-300  border-r-2 overflow-y-auto flex flex-col gap-y-4 ${
        isSidebarOpen ? "w-0 p-0" : "w-64 px-2"
      } `}
    >
      <div className={"lg:flex transition-all duration-100 flex-col gap-2"}>
        <SidebarButton className="lg:hidden" />
        <div className="flex h-[60px] w-full items-center px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">Saliah foods</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {/* <Link
                            className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" , {
                                // "text-gray-900 dark:text-gray-50": pathname.includes("/admin/dashboard")
                            })}
                            href="/admin/dashboard"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Home
                        </Link> */}
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "text-gray-900 dark:text-gray-50": pathname.includes(
                    "/admin/dashboard/orders"
                  ),
                }
              )}
              href="/admin/dashboard/orders"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge> */}
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "text-gray-900 dark:text-gray-50": pathname.includes(
                    "/admin/dashboard/products"
                  ),
                }
              )}
              href="/admin/dashboard/products"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "text-gray-900 dark:text-gray-50": pathname.includes(
                    "/admin/dashboard/coupons"
                  ),
                }
              )}
              href="/admin/dashboard/coupons"
            >
              <PackageIcon className="h-4 w-4" />
              Coupons
            </Link>

            <Button
              onClick={handleLogout}
              className="flex items-center gap-3 justify-start hover:text-destructive"
              variant="ghost"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
            {/* <Link
                            className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" , {
                                "hover:text-gray-900 dark:hover:text-gray-50":pathname.includes("")
                            })}
                            href="/admin/dashboard/customers"
                        >
                            <UsersIcon className="h-4 w-4" />
                            Customers
                        </Link> */}
          </nav>
        </div>
      </div>
    </aside>
  );
}
