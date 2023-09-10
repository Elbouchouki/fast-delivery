import { type Metadata } from "next"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"
import AdminFooter from "@/components/admin/admin-footer"
import { Separator } from "@/components/ui/separator"
import { PACKED_ORDERES } from "@/mock/packed-orderes"
import AdminPackedOreders from "@/components/admin/dispatched/dispatch-order"

export const metadata: Metadata = {
  title: "Dispatched Page",
  description: "Dispatched page for order delivery",
}


export default async function DispatchedPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col space-y-8 w-full">
      <div className={cn("flex flex-col items-start justify-between space-y-2 lg:flex-row md:space-y-0", {
        "lg:flex-row-reverse flex-col-reverse": lang === "ar"
      })}>
        <h2 className={cn("w-full text-3xl font-bold tracking-tight", {
          "text-right": lang === "ar"
        })}>
          {dict.admin.dispatched.title}
        </h2>
      </div >
      <Separator className="my-4" />
      <div className="w-full">
        <AdminPackedOreders dict={dict} lang={lang} packedOrders={PACKED_ORDERES} />
      </div>
      <AdminFooter className="py-0 pb-6" dict={dict} lang={lang} />
    </div>
  )
}
