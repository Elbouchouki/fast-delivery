import { Input } from "@/components/ui/input"
import { Locale } from "@/i18n.config"
import { cn } from "@/lib/utils"
import { DictionaryEntry } from "@/types"

export function Search({
  dict,
  lang,
  className
}: {
  dict: DictionaryEntry
  lang: Locale
  className?: string
}) {
  return (
    <div className={className}>
      <Input
        type="search"
        placeholder={dict.admin.layout.search}
        className={cn("w-[300px]", {
          "text-right ": lang === "ar"
        })}
      />
    </div>
  )
}