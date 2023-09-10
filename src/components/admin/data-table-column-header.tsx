import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  dict: DictionaryEntry
  lang: Locale
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className, dict, lang
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4 ml-2" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4 ml-2" />
            ) : (
              <CaretSortIcon className="w-4 h-4 ml-2" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem className={cn({
            "flex-row-reverse": lang === "ar"
          })} onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className={cn("mr-2 h-3.5 w-3.5 text-muted-foreground/70", {
              "ml-2 mr-0": lang === "ar"
            })} />
            {dict.admin.shared.colHeader.asc}
          </DropdownMenuItem>
          <DropdownMenuItem className={cn({
            "flex-row-reverse": lang === "ar"
          })} onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className={cn("mr-2 h-3.5 w-3.5 text-muted-foreground/70", {
              "ml-2 mr-0": lang === "ar"
            })} />
            {dict.admin.shared.colHeader.desc}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className={cn({
            "flex-row-reverse": lang === "ar"
          })} onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className={cn("mr-2 h-3.5 w-3.5 text-muted-foreground/70", {
              "ml-2 mr-0": lang === "ar"
            })} />
            {dict.admin.shared.colHeader.hide}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}