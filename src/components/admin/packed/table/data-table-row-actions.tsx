"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EyeIcon, Trash2Icon } from "lucide-react"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"
import { toast } from "sonner"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  dict: DictionaryEntry
  lang: Locale
}

export function DataTableRowActions<TData>({
  row, dict, lang
}: DataTableRowActionsProps<TData>) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="w-4 h-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <span className="flex flex-row items-center whitespace-nowrap">
            <EyeIcon className="w-4 h-4 mr-2" />
            View
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => { toast.success(dict.toast.orderDeleted) }}>
          <span className="flex flex-row items-center whitespace-nowrap">
            <Trash2Icon className="w-4 h-4 mr-2" />
            Delete
          </span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}