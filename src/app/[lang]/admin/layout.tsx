import Header from "@/components/admin/admin-header";
import { Sidebar } from "@/components/admin/sidebar";
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function AdminLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col w-screen h-screen ">
      <Header className="absolute top-0 z-50 flex-none w-full h-16 " dict={dict} lang={lang} />
      <div className={cn("flex h-screen pt-16", {
        "flex-row-reverse": lang === "ar"
      })}>
        <div className="w-[300px] hidden md:block border-r pb-6  flex-none">
          <ScrollArea className="h-full grow">
            <Sidebar className="py-2 mx-4" dict={dict} lang={lang} />
          </ScrollArea>
        </div>
        <div className="flex px-8 py-8 overflow-x-scroll grow">
          {children}
        </div>
      </div>
    </div>
  )
}