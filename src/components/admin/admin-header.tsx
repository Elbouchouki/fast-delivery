
import { Locale } from "@/i18n.config";
import { DictionaryEntry } from '@/types';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Search } from "@/components/admin/search";
import { UserNav } from "@/components/admin/user-nav";
import AppLogo from "@/components/app-logo";
import Hamburger from "@/components/admin/hamburger";
import { cn } from "@/lib/utils";
import LangagueSwitch from "@/components/ui/langague-switch";

export default function Header({ dict, lang, className }: {
  dict: DictionaryEntry,
  lang: Locale,
  className?: string
}) {

  return (
    <header className={cn("flex flex-row h-16 items-center px-4 border-b", className, {
      "flex-row-reverse": lang === "ar",
    })}>
      <Hamburger dict={dict} lang={lang} className="block md:hidden" />
      <AppLogo lang={lang} dict={dict} />
      <div className={cn("ml-auto flex items-center space-x-3", {
        "mr-auto ml-0 flex-row-reverse": lang === "ar",
      })}>
        <Search dict={dict} lang={lang} className="hidden px-4 md:flex" />
        <UserNav dict={dict} lang={lang} />
        <ThemeToggle />
        <LangagueSwitch lang={lang} />
      </div>
    </header>
  )
}