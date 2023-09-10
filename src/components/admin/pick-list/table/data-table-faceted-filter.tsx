import * as React from "react"
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

import { ARNumber, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { DictionaryEntry } from "@/types"
import { Locale } from "@/i18n.config"

interface DataTableFacetedFilter<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  dict: DictionaryEntry
  lang: Locale
}

export function DataTableFacetedFilter<TData, TValue>({
  lang, dict,
  column,
  title,
  options,
}: DataTableFacetedFilter<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues()
  const selectedValues = new Set(column?.getFilterValue() as string[])

  const NumberFormatter = ARNumber(lang)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className={
          cn("flex h-8 border-dashed", {
            "flex-row-reverse": lang === "ar"
          })
        }>
          <PlusCircledIcon className={cn("w-4 h-4 mr-2", {
            "mr-0 ml-2": lang === "ar"
          })} />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="h-4 mx-2" />
              <div className="flex space-x-1">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className={cn("flex font-normal rounded-sm", {
                      "flex-row-reverse": lang === "ar"
                    })}
                  >
                    <span className={
                      cn("mr-2", {
                        "ml-2 mr-0": lang === "ar"
                      })
                    }>{NumberFormatter.format(selectedValues.size)}</span>
                    <span>{dict.admin.pickList.toolbar.selected}</span>
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="px-1 font-normal rounded-sm"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align={
        lang === "ar" ? "end" : "start"
      }>
        <Command>
          <CommandInput className={cn("text-left", {
            "text-right": lang === "ar"
          })} placeholder={title} />
          <CommandList>
            <CommandEmpty>{dict.admin.pickList.toolbar.noResultsFound}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    className={cn("flex items-center justify-start", {
                      "flex-row-reverse": lang === "ar"
                    })}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value)
                      } else {
                        selectedValues.add(option.value)
                      }
                      const filterValues = Array.from(selectedValues)
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      )
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible", {
                        "ml-2 mr-0": lang === "ar"
                      }
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && (
                      <option.icon className={cn("w-4 h-4 mr-2 text-muted-foreground", {
                        "ml-2 mr-0": lang === "ar"
                      })} />
                    )}
                    <span className="whitespace-nowrap">{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className={cn("flex items-center justify-center w-4 h-4 ml-auto font-mono text-xs", {
                        "mr-auto ml-0": lang === "ar"
                      })}>
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    {dict.admin.pickList.toolbar.clearFilters}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}