import { type Metadata } from "next"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"
"@/components/admin/admin-footer"

export const metadata: Metadata = {
  title: "Delivery Manifest Page",
  description: "Delivery Manifest Page",
}


export default async function DeliveryManifestPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col space-y-8">
      <div className={cn("flex flex-col items-start justify-between space-y-2 lg:flex-row md:space-y-0", {
        "lg:flex-row-reverse flex-col-reverse": lang === "ar"
      })}>
        <h2 className={cn("w-full text-3xl font-bold tracking-tight", {
          "text-right": lang === "ar"
        })}>
          {dict.admin.deliveryManifest.title}
        </h2>
      </div >
    </div>
  )
}
