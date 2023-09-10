"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "@/components/admin/pick-list/table/data-table-view-options"
import { priorities, statuses, warehouse } from "@/mock/data_table"
import { DataTableFacetedFilter } from "@/components/admin/pick-list/table/data-table-faceted-filter"
import { Label } from "@/components/ui/label"
import { CalendarDateRangePicker } from "@/components/admin/date-range-picker"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"
import { cn } from "@/lib/utils"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  dict: DictionaryEntry
  lang: Locale
}


export function DataTableToolbar<TData>({
  table,
  dict,
  lang
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className={cn("flex items-start justify-between", {
      "flex-row-reverse": lang === "ar"
    })}>
      <div className="flex flex-col items-center flex-1">
        <div className={cn("flex justify-start items-start w-full gap-3 flex-wrap", {
          "items-end flex-row-reverse": lang === "ar"
        })}>

          <div className="grid items-center gap-1.5">
            <Label htmlFor="sr-id" className={cn("text-left", {
              "text-right": lang === "ar"
            })}>
              {dict.admin.pickList.toolbar.awbNumber}
            </Label>
            <Input
              placeholder="SR-XXXX"
              value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("id")?.setFilterValue(event.target.value)
              }
              className={cn("h-8 w-[250px] text-left", {
                "text-right": lang === "ar"
              })}
            />
          </div>

          <div className="grid items-center gap-1.5">
            <Label htmlFor="pickupId" className={cn("text-left", {
              "text-right": lang === "ar"
            })}>
              {dict.admin.pickList.toolbar.pickedUpId}
            </Label>
            <Input
              placeholder="PICK-XXXX"
              value={(table.getColumn("pickupId")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("pickupId")?.setFilterValue(event.target.value)
              }
              className={cn("h-8 w-[250px] text-left", {
                "text-right": lang === "ar"
              })}
            />
          </div>

          <div className="grid items-center gap-1.5">
            <Label htmlFor="date" className={cn("text-left", {
              "text-right": lang === "ar"
            })}>
              {dict.admin.pickList.toolbar.dateBetween}
            </Label>
            <CalendarDateRangePicker className="h-8 " dict={dict} lang={lang} />
          </div>


        </div>
        <div className={cn("flex flex-row flex-wrap w-full mt-2 gap-2", {
          "flex-row-reverse items-end ": lang === "ar"
        })}>
          {table.getColumn("warehouse") && (
            <DataTableFacetedFilter dict={dict} lang={lang}
              column={table.getColumn("warehouse")}
              title={dict.admin.pickList.dataTable.labels.warehouse}
              options={warehouse}
            />
          )}
          {table.getColumn("status") && (
            <DataTableFacetedFilter dict={dict} lang={lang}
              column={table.getColumn("status")}
              title={dict.admin.pickList.dataTable.labels.status}
              options={statuses}
            />
          )}
          {table.getColumn("priority") && (
            <DataTableFacetedFilter dict={dict} lang={lang}
              column={table.getColumn("priority")}
              title={dict.admin.pickList.dataTable.labels.priority}
              options={priorities}
            />
          )}
        </div>
        {isFiltered && (
          <div className={cn("flex mt-2 w-full", {
            "justify-end": lang === "ar"
          })}>
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              {dict.admin.pickList.toolbar.resetFilters}
              <Cross2Icon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

      </div>
      <DataTableViewOptions dict={dict} lang={lang} table={table} />
    </div>
  )
}