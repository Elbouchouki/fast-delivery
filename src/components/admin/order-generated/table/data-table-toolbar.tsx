"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "@/components/admin/order-generated/table/data-table-view-options"
import { companies, orderTypes, payementModes, sellers } from "@/mock/data_table"
import { DataTableFacetedFilter } from "@/components/admin/order-generated/table/data-table-faceted-filter"
import { Label } from "@/components/ui/label"
import { CalendarDateRangePicker } from "@/components/admin/date-range-picker"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"
import { cn } from "@/lib/utils"
import { PackageOpenIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { toast } from "sonner"

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
    <div className="flex flex-col gap-3">
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
                placeholder="AWB-XXXX"
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
              <Label htmlFor="origin" className={cn("text-left", {
                "text-right": lang === "ar"
              })}>
                {dict.admin.orderGenerated.dataTable.labels.origin}
              </Label>
              <Input
                placeholder="riyadh"
                value={(table.getColumn("origin")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                  table.getColumn("origin")?.setFilterValue(event.target.value)
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

            {table.getColumn("orderType") && (
              <DataTableFacetedFilter dict={dict} lang={lang}
                column={table.getColumn("orderType")}
                title={dict.admin.orderGenerated.dataTable.labels.orderType}
                options={orderTypes}
              />
            )}
            {table.getColumn("company") && (
              <DataTableFacetedFilter dict={dict} lang={lang}
                column={table.getColumn("company")}
                title={dict.admin.orderGenerated.dataTable.labels.company}
                options={companies}
              />
            )}
            {table.getColumn("seller") && (
              <DataTableFacetedFilter dict={dict} lang={lang}
                column={table.getColumn("seller")}
                title={dict.admin.orderGenerated.dataTable.labels.seller}
                options={sellers}
              />
            )}
            {table.getColumn("payementMode") && (
              <DataTableFacetedFilter dict={dict} lang={lang}
                column={table.getColumn("payementMode")}
                title={dict.admin.orderGenerated.dataTable.labels.payementMode}
                options={payementModes}
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
      <div className={cn("flex flex-row justify-end w-full", {
        "flex-row-reverse items-start ": lang === "ar"
      })}>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className={cn("flex flex-row", {
              "flex-row-reverse": lang === "ar"
            })}>
              <PackageOpenIcon className={cn("w-4 h-4 mr-2", {
                "mr-0 ml-2": lang === "ar"
              })} />
              <span>
                {dict.admin.orderGenerated.toolbar.generateOrder}
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {dict.admin.orderGenerated.toolbar.generateOrder}
              </DialogTitle>
              <DialogDescription>
                {dict.admin.orderGenerated.toolbar.generateOrderDescription}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={() => {
                  toast.success(dict.toast.orderGenerated)
                }}>
                  {dict.admin.orderGenerated.toolbar.generate}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}