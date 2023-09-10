"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "../icons"
import { Locale } from "@/i18n.config"
import { useRouter } from "next/navigation"

const LangagueSwitch = ({
  lang,
  className
}: {
  lang: Locale,
  className?: string
}) => {

  const router = useRouter()


  const handleLangChange = (lang: Locale) => {
    const newPath = window.location.pathname.replace(/^\/[a-z]{2}\//, `/${lang}/`)
    router.push(`${window.location.origin}${newPath}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-10" variant="ghost" size="icon">
          {lang === "ar" ? <Icons.arabic className="w-10 h-5" /> : <Icons.english className="w-10 h-5" />}
          <span className="sr-only">Switch Langague</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLangChange("ar")}>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLangChange("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LangagueSwitch
