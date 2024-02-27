"use client";
import moment from "moment";
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IOrder } from "@/lib/db/models/order.model";
import { SidebarButton } from "../Provider/SidebarProvider";

export function OrderTable({ data }: { data: IOrder[] }) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const router = useRouter();
    const columns: ColumnDef<IOrder>[] = [
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
        },
        {
            accessorKey: "city",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        CIty
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
        },
        {
            accessorKey: "state",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        State
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
        },
        {
            accessorKey: "pinCode",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        PinCode
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
        },
        {
            accessorKey: "status",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
        },

        {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            accessorKey: "createdAt",
            cell: (row) => <>{moment(row.getValue() || "").format("DD-MM-YYYY")}</>,
        },

        // {
        //   id: "actions",
        //   cell: ({ row }) => {
        //     const id = row.id;

        //     return (
        //       <DropdownMenu>
        //         <DropdownMenuTrigger asChild>
        //           <Button variant="ghost" className="h-8 w-8 p-0">
        //             <span className="sr-only">Open menu</span>
        //             <MoreHorizontal className="h-4 w-4" />
        //           </Button>
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent className="w-56">
        //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //           <DropdownMenuSeparator />
        //           <DropdownMenuGroup>
        //             <DropdownMenuItem asChild>
        //               <Link
        //                 className="flex items-center cursor-pointer"
        //                 href={`/admin/dashboard/product?type=edit&_id=${id}`}
        //               >
        //                 <Pencil className="mr-2 h-4 w-4" />
        //                 <span>Edit</span>
        //               </Link>
        //             </DropdownMenuItem>
        //             <DropdownMenuItem className="text-destructive cursor-pointer">
        //               <Trash2 className="mr-2  h-4 w-4" />
        //               <span>Delete</span>
        //             </DropdownMenuItem>
        //           </DropdownMenuGroup>
        //         </DropdownMenuContent>
        //       </DropdownMenu>
        //     );
        //   },
        // },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    });

    return (
        <div className="rounded-md border flex-1 px-10 overflow-y-auto">
            <SidebarButton />
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            return (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
