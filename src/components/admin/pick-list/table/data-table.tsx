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
import { DataTableToolbar } from "@/components/admin/pick-list/table/data-table-toolbar"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses, warehouse } from "@/mock/data_table"
import { DataTableColumnHeader } from "@/components/admin/data-table-column-header"
import { DataTableRowActions } from "@/components/admin/pick-list/table/data-table-row-actions"
import { Locale } from "@/i18n.config"
import { DictionaryEntry, PickList } from "@/types"




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

  const columns: ColumnDef<PickList>[] = [
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
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.id} />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "pickupId",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.pickupId} />
      ),
      cell: ({ row }) => {
        const label = labels.find((label) => label.value === row.original.label)

        return (
          <div className="flex space-x-2">
            {label && <Badge variant="outline">{label.label}</Badge>}
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("pickupId")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "warehouse",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.warehouse} />
      ),
      cell: ({ row }) => {
        const ware = warehouse.find(
          (w) => w.value === row.getValue("warehouse")
        )

        return (
          <div className="flex space-x-2">
            {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
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
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.status} />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue("status")
        )

        if (!status) {
          return null
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && (
              <status.icon className="w-4 h-4 mr-2 text-muted-foreground" />
            )}
            <span>{status.label}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.priority} />
      ),
      cell: ({ row }) => {
        const priority = priorities.find(
          (priority) => priority.value === row.getValue("priority")
        )

        if (!priority) {
          return null
        }

        return (
          <div className="flex items-center">
            {priority.icon && (
              <priority.icon className="w-4 h-4 mr-2 text-muted-foreground" />
            )}
            <span>{priority.label}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "packed",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.packed} />
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <span>{(row.getValue("packed") as boolean) ? dict.admin.shared.yes : dict.admin.shared.no}</span>
        </div>
      ),
    }, {
      accessorKey: "pickedUp",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.pickedUp} />
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <span>{(row.getValue("pickedUp") as boolean) ? dict.admin.shared.yes : dict.admin.shared.no}</span>
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader className="whitespace-nowrap" dict={dict} lang={lang} column={column} title={dict.admin.pickList.dataTable.labels.date} />
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <span>{new Date(row.getValue("date")).toLocaleDateString(
            lang === "ar" ? "ar-SR" : "en-US"
          )}</span>
        </div>
      ),
      enableSorting: false,
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions dict={dict} lang={lang} row={row} />,
    },
  ]

  const colOrder = [
    "select",
    "id",
    "pickupId",
    "warehouse",
    "status",
    "priority",
    "packed",
    "pickedUp",
    "date",
    "actions"
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
                  {dict.admin.pickList.dataTable.noResults}
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