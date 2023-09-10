import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"
import { ARNumber, cn } from "@/lib/utils"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  dict: DictionaryEntry
  lang: Locale
}

export function DataTablePagination<TData>({
  table, dict, lang
}: DataTablePaginationProps<TData>) {

  const NumberFormatter = ARNumber(lang)


  return (
    <div className="flex flex-col justify-between py-2 lg:items-center lg:flex-row ">
      <div className={cn("flex-1 my-2 space-x-1 text-sm lg:my-0 text-muted-foreground", {
        "flex-row-reverse": lang === "ar"
      })}>
        <span>
          {NumberFormatter.format(table.getFilteredSelectedRowModel().rows.length)}
        </span>
        <span>
          {dict.admin.shared.pagination.of}
        </span>
        <span>
          {NumberFormatter.format(table.getFilteredRowModel().rows.length)}
        </span>
        <span>
          {dict.admin.shared.pagination.rowSelected}
        </span>
      </div>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:items-center lg:flex-row lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">
            {dict.admin.shared.pagination.rowsPerPage}
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={NumberFormatter.format(table.getState().pagination.pageSize)} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {NumberFormatter.format(pageSize)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end space-x-6">
          <div className={cn("flex w-[100px] items-center justify-start gap-1 lg:justify-center text-sm font-medium", {
            "flex-row-reverse": lang === "ar"
          })}>
            <span>{dict.admin.shared.pagination.page}</span>
            <span>{NumberFormatter.format(table.getState().pagination.pageIndex + 1)}</span>
            <span>{dict.admin.shared.pagination.of}</span>
            <span>{NumberFormatter.format(table.getPageCount())}</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <Button
              variant="outline"
              className="hidden w-8 h-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">{dict.admin.shared.pagination.goToFirstPage}</span>
              <DoubleArrowLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">{dict.admin.shared.pagination.goToPrevious}</span>
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">{dict.admin.shared.pagination.goToNextPage}</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden w-8 h-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">{dict.admin.shared.pagination.goToLastPage}</span>
              <DoubleArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}