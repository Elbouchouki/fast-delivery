import { Locale } from "@/i18n.config"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { DictionaryEntry } from "@/types"
import { ShipIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const AppLogo = ({ lang, dict }: {
  lang: Locale,
  dict: DictionaryEntry
}) => {
  return (
    <>
      <Link
        href={`/${lang}/admin`}
        className={cn("flex items-center text-lg font-semibold tracking-wide", {
          "flex-row-reverse": lang === "ar"
        })}
      >
        <ShipIcon className={cn("mr-2 h-6 w-6", {
          "mr-0 ml-2": lang === "ar"
        })} aria-hidden="true" />
        <span>{dict.appName}</span>
      </Link>
    </>
  )
}
export default AppLogo