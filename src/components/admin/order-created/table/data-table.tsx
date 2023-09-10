"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "@/components/admin/data-table-pagination"
import { DataTableToolbar } from "@/components/admin/order-created/table/data-table-toolbar"
import { Checkbox } from "@/components/ui/checkbox"
import { companies, orderTypes, payementModes, sellers } from "@/mock/data_table"
import { DataTableColumnHeader } from "@/components/admin/data-table-column-header"
import { DataTableRowActions } from "@/components/admin/order-created/table/data-table-row-actions"
import { Locale } from "@/i18n.config"
import { DictionaryEntry, OrderCreated } from "@/types"




interface DataTableProps<TData, TValue> {
  data: TData[]
  dict: DictionaryEntry
  lang: Locale
}

export function DataTable<TData, TValue>({
  data,
  dict,
  lang
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const columns: ColumnDef<OrderCreated>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.id} />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "orderType",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.orderType} />
      ),
      cell: ({ row }) => {
        const ware = orderTypes.find(
          (w) => w.value === row.getValue("orderType")
        )

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {ware?.label}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      }
    },
    {
      accessorKey: "awb",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.awb} />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("awb")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "company",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.company} />
      ),
      cell: ({ row }) => {
        const ware = companies.find(
          (w) => w.value === row.getValue("company")
        )

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {ware?.label}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      }
    },
    {
      accessorKey: "origin",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.origin} />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("origin")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "seller",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.seller} />
      ),
      cell: ({ row }) => {
        const ware = sellers.find(
          (w) => w.value === row.getValue("seller")
        )

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {ware?.label}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      }
    },
    {
      accessorKey: "destination",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.destination} />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("destination")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "receiver",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.receiver} />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("receiver")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "receiverAdress",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.receiverAdress} />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("receiverAdress")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "payementMode",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.orderCreated.dataTable.labels.payementMode} />
      ),
      cell: ({ row }) => {
        const ware = payementModes.find(
          (w) => w.value === row.getValue("payementMode")
        )

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {ware?.label}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      }
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions dict={dict} lang={lang} row={row} />,
    },
  ]

  const colOrder = [
    "select",
    "id",
    "orderType",
    "awb",
    "company",
    "origin",
    "seller",
    "destination",
    "receiver",
    "receiverAdress",
    "payementMode",
    "actions",
  ]

  const table = useReactTable<any>({
    data,
    columns,
    state: {
      columnOrder: lang === "ar" ? colOrder.reverse() : colOrder,
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar dict={dict} lang={lang} table={table} />
      <div className="border rounded-md ">
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
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {dict.admin.orderCreated.dataTable.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination dict={dict} lang={lang} table={table} />
    </div>
  )
}