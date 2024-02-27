"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { HtmlHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { SidebarButton, useSidebar } from "../Provider/SidebarProvider"
import Package2Icon from "@/Icons/Package2Icon"
import HomeIcon from "@/Icons/HomeIcon"
import ShoppingCartIcon from "@/Icons/ShoppingCartIcon"
import PackageIcon from "@/Icons/PackageIcon"
import UsersIcon from "@/Icons/UsersIcon"


export default function Sidebar() {

    const { isSidebarOpen } = useSidebar()
    return (
        <aside className={cn(" w-80 border-r overflow-x-hidden transition-all duration-300 bg-gray-100/40 lg:block dark:bg-gray-800/40", {
            "w-0": isSidebarOpen
        })}>
            <div className={cn("lg:flex transition-all duration-100 flex-col gap-2", {
                "w-0": isSidebarOpen
            })}>
                <div className="flex h-[60px] w-full items-center px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Saliah foods</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/admin/dashboard"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Home
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="/admin/dashboard/orders"
                        >
                            <ShoppingCartIcon className="h-4 w-4" />
                            Orders
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/admin/dashboard/products"
                        >
                            <PackageIcon className="h-4 w-4" />
                            Products
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/admin/dashboard/customers"
                        >
                            <UsersIcon className="h-4 w-4" />
                            Customers
                        </Link>

                    </nav>
                </div>
            </div>
        </aside>
    )
}

/* 

  <div className="flex flex-col w-full">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <SidebarButton />
                    <Link className="lg:hidden" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full">
                        <h1 className="font-semibold text-lg">Recent Orders</h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                size="icon"
                                variant="ghost"
                            >
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "32/32",
                                        objectFit: "cover",
                                    }}
                                    width="32"
                                />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-sm rounded-lg p-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Order</TableHead>
                                    <TableHead className="min-w-[150px]">Customer</TableHead>
                                    <TableHead className="hidden md:table-cell">Channel</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">#3210</TableCell>
                                    <TableCell>Olivia Martin</TableCell>
                                    <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                    <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                                    <TableCell className="text-right">$42.25</TableCell>
                                    <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="font-medium">#3204</TableCell>
                                    <TableCell>Michael Johnson</TableCell>
                                    <TableCell className="hidden md:table-cell">Shop</TableCell>
                                    <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                                    <TableCell className="text-right">$64.75</TableCell>
                                    <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3203</TableCell>
                                    <TableCell>Lisa Anderson</TableCell>
                                    <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                    <TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
                                    <TableCell className="text-right">$34.50</TableCell>
                                    <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3202</TableCell>
                                    <TableCell>Samantha Green</TableCell>
                                    <TableCell className="hidden md:table-cell">Shop</TableCell>
                                    <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
                                    <TableCell className="text-right">$89.99</TableCell>
                                    <TableCell className="hidden sm:table-cell">Paid</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3201</TableCell>
                                    <TableCell>Adam Barlow</TableCell>
                                    <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                    <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
                                    <TableCell className="text-right">$24.99</TableCell>
                                    <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3207</TableCell>
                                    <TableCell>Sophia Anderson</TableCell>
                                    <TableCell className="hidden md:table-cell">Shop</TableCell>
                                    <TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
                                    <TableCell className="text-right">$99.99</TableCell>
                                    <TableCell className="hidden sm:table-cell">Paid</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3206</TableCell>
                                    <TableCell>Daniel Smith</TableCell>
                                    <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                    <TableCell className="hidden md:table-cell">October 7, 2021</TableCell>
                                    <TableCell className="text-right">$67.50</TableCell>
                                    <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View order</DropdownMenuItem>
                                                <DropdownMenuItem>Customer details</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>*/