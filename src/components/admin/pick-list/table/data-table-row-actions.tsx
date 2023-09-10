"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ClipboardEditIcon, EyeIcon, FileTextIcon, PrinterIcon, Trash2Icon } from "lucide-react"
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
            <span>{dict.admin.shared.rowActions.view}</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex flex-row items-center whitespace-nowrap">
            <ClipboardEditIcon className="w-4 h-4 mr-2" />
            <span>{dict.admin.shared.rowActions.assignPickupList}</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger >
            <span className="flex flex-row items-center whitespace-nowrap">
              <PrinterIcon className="w-4 h-4 mr-2" />
              <span>{dict.admin.shared.rowActions.printPickupList}</span>
            </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup >
              <DropdownMenuRadioItem value="Pickup-List-Normal">
                {dict.admin.shared.rowActions.normalFormat}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Pickup-List-A4">
                A4
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span className="flex flex-row items-center whitespace-nowrap">
              <FileTextIcon className="w-4 h-4 mr-2" />
              <span>{dict.admin.shared.rowActions.printAWB} </span>
            </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup >
              <DropdownMenuRadioItem value="awb-4*6">
                awb 4*6
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="A4">
                awb A4
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {
          toast.success(dict.toast.pickListDeleted)
        }}>
          <span className="flex flex-row items-center whitespace-nowrap">
            <Trash2Icon className="w-4 h-4 mr-2" />
            <span>{dict.admin.shared.rowActions.delete}</span>
          </span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}