"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { subMonths, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DictionaryEntry } from "../../types"
import { Locale } from "@/i18n.config"
import { ar, enUS } from 'date-fns/locale';

type CalendarDateRangePickerProps = React.HTMLAttributes<HTMLDivElement> & {
  dict: DictionaryEntry,
  lang?: Locale
}

export function CalendarDateRangePicker({
  className, dict, lang
}: CalendarDateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined)

  const getFormatter = () => {
    if (lang === "ar") {
      return "y dd, LLL"
    } else {
      return "LLL dd, y"
    }
  }
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "flex flex-row w-[285px] justify-start text-left font-normal",
              !date && "text-muted-foreground", className,
              {
                "flex-row-reverse text-right": lang === "ar"
              }
            )}
          >
            <CalendarIcon className={cn("w-4 h-4 mr-2", {
              "mr-0 ml-2": lang === "ar"
            })} />
            {date?.from ? (
              date.to ? (
                <>
                  <span>
                    {format(date.from, getFormatter(), {
                      locale: lang === "ar" ? ar : enUS
                    })}
                  </span>

                  <span className="mx-1">
                    {` - `}
                  </span>
                  <span>
                    {format(date.to, getFormatter(), {
                      locale: lang === "ar" ? ar : enUS
                    })}
                  </span>
                </>
              ) : (
                format(date.from, getFormatter(), {
                  locale: lang === "ar" ? ar : enUS
                })
              )
            ) : (
              <span>
                {dict.dateRangePicker.placeholder ?? "Pick a date"}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            locale={lang === "ar" ? ar : enUS}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}