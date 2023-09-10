import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DictionaryEntry } from "@/types";
import { Locale } from "@/i18n.config";
import { Sidebar } from "@/components/admin/sidebar";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const Hamburger = ({
  lang,
  dict,
  className
}: {
  lang: Locale
  dict: DictionaryEntry
  className?: string
}) => {
  return (
    <Sheet >
      <SheetTrigger className={className} asChild>
        <Button className={cn("mr-3", {
          "mr-0 ml-3": lang === "ar"
        })} variant="outline" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[320px] sm:w-screen h-screen" side={
        lang === "ar" ? "right" : "left"
      }>
        <ScrollArea className="h-full pr-4 mt-6 grow" >
          <Sidebar lang={lang} dict={dict} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
export default Hamburger