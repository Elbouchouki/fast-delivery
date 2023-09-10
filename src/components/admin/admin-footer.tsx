import { Locale } from "@/i18n.config"
import { ARNumber, cn } from "@/lib/utils"
import { DictionaryEntry } from "@/types"
import Link from "next/link"

const AdminFooter = ({
  className,
  dict,
  lang
}: {
  className?: string
  dict: DictionaryEntry
  lang: Locale
}) => {

  const NumberFormatter = ARNumber(lang, false)

  return (
    <footer className={cn("w-full py-8 text-sm text-center text-gray-700 dark:text-gray-400", className)}>
      <span className={cn("flex flex-row items-center justify-center gap-1", {
        "flex-row-reverse": lang === "ar"
      })}>
        <span>{`© ${NumberFormatter.format(new Date().getFullYear())}`}</span>
        <Link href={`/${lang}/admin`} className="text-blue-700 dark:text-blue-400 hover:underline">{`${dict.appName}`}</Link>
        <span>{dict.footer.allRightsReserved}</span>
      </span>
    </footer>
  )
}
export default AdminFooter