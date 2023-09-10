import { type Metadata } from "next"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DownloadCloudIcon } from "lucide-react"
import { DataTable } from "@/components/admin/order-created/table/data-table"
"@/components/admin/admin-footer"
import { Separator } from "@/components/ui/separator"
import AdminFooter from "@/components/admin/admin-footer"
import { ORDER_CREATED } from "@/mock/order_created"

export const metadata: Metadata = {
  title: "Order Created",
  description: "Order Created",
}


export default async function OrderCreatedPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col max-w-full space-y-8 grow">
      <div className={cn("h-16 flex flex-col items-start justify-between space-y-2 lg:flex-row md:space-y-0", {
        "lg:flex-row-reverse flex-col-reverse": lang === "ar"
      })}>
        <h2 className={cn("w-full text-3xl font-bold tracking-tight", {
          "text-right": lang === "ar"
        })}>
          {dict.admin.orderCreated.title}
        </h2>
        <Button
          size="sm"
          className={cn("self-end  flex-none", {
            "self-start flex flex-row-reverse ": lang === "ar"
          })}
        >
          <DownloadCloudIcon className={cn("w-5 h-5 mr-2", {
            "mr-0 ml-2": lang === "ar"
          })} />
          <span className="whitespace-nowrap">
            {dict.admin.shared.exportToExcel}
          </span>
        </Button>
      </div>
      <Separator className="my-4" />

      <div className="w-full">
        <DataTable dict={dict} lang={lang} data={ORDER_CREATED} />
      </div>

      <AdminFooter className="py-0 pb-6" dict={dict} lang={lang} />
    </div>
  )
}
