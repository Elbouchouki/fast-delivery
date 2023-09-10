"use client";

import React from 'react';
import { ARNumber, cn } from "@/lib/utils";
import { DictionaryEntry } from '@/types';
import { Locale } from '@/i18n.config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge';
import { GET_SIDEBAR_ITEMS } from '@/constants/navbar.config';


export function Sidebar(
  { className, dict, lang }: { className?: string, dict: DictionaryEntry, lang: Locale }
) {
  const pathname = usePathname()
  const NumberFormatter = ARNumber(lang)
  const sidebarItems = GET_SIDEBAR_ITEMS(lang)
  return (
    <aside className={cn("flex flex-col my-5 space-y-3", className)}>
      {
        sidebarItems.map((item, index) => (
          <Link
            className="justify-start w-full font-normal" key={index} href={
              (item.active === undefined || item.active) ? `/${lang}${item.href}` : {}
            }>
            <Button
              disabled={(item.active !== undefined && !item.active)}
              variant="ghost"
              className={cn("w-full justify-start flex flex-row  font-normal", {
                "bg-primary/70 text-white hover:text-white hover:bg-primary/70": pathname === `/${lang}${item.href}`,
              }, {
                "text-right  flex-row-reverse": lang === "ar"
              })}
            >
              <item.icon
                className={
                  cn("w-4 h-4 mr-2", {
                    "mr-0 ml-2": lang === "ar"
                  })
                }
              />
              {item.name}
              {
                item.notifCount && item.notifCount > 0 &&
                <Badge variant="secondary" className={cn("px-2 py-1 ml-auto rounded-xl ", {
                  "ml-0 mr-auto": lang === "ar"
                })}>
                  {NumberFormatter.format(item.notifCount)}
                </Badge>
              }
            </Button>
          </Link>
        ))
      }
    </aside>
  )
}