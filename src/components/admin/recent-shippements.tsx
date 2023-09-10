import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Locale } from "@/i18n.config"
import { SARCurrency, cn } from "@/lib/utils"
import { GET_RECENT_SHIPPEMENTS_MOCK } from "@/mock/dashboard"
import { DictionaryEntry } from "../../types"

const RecentShippements = ({
  dict, lang
}: {
  lang: Locale
  dict: DictionaryEntry
}) => {
  const Currency = SARCurrency(lang)

  const RECENT_SHIPPEMENTS_MOCK = GET_RECENT_SHIPPEMENTS_MOCK(lang)

  return (
    <div className="space-y-8">
      {
        RECENT_SHIPPEMENTS_MOCK.map((shippement, index) => (
          <div key={index} className={cn("flex items-center", {
            "flex-row-reverse": lang === "ar",
          })}>
            <Avatar
              className={cn("h-9 w-9")}
            >
              <AvatarImage src={shippement.picker.avatar} alt={`${shippement.picker.name} Avatar`} />
              <AvatarFallback>{shippement.picker.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className={cn("ml-4 space-y-1", {
              "ml-0 mr-4": lang === "ar",
            })}
            >
              <p className={cn("text-sm font-medium leading-none", {
                "text-right": lang === "ar",
              })}>
                {
                  `
                    ${lang !== "ar" ? "Shipped " : ""}
                    ${shippement.package.quantity} x 
                    ${shippement.package.name}
                    ${lang === "ar" ? " تم الشحن" : ""}
                  `
                }
              </p>
              <p className={cn("text-sm text-muted-foreground", {
                "text-right": lang === "ar",
              })}>
                {lang === "ar" ?
                  `${shippement.picker.email} - ${shippement.picker.name}`
                  : `${shippement.picker.name} - ${shippement.picker.email}`
                }
              </p>
            </div>

            <div className={cn("ml-auto  space-y-1", {
              "ml-0 mr-auto": lang === "ar",
            })}
            >
              <p className={cn("text-sm font-medium leading-none", {
                "text-right": lang === "ar",
              })}>
                {`${Currency.format(shippement.package.quantity * shippement.package.price)}`}
              </p>
              <p className={cn("text-sm text-muted-foreground text-right", {
                "text-left": lang === "ar",
              })}>
                {shippement.shippedAt.toLocaleDateString(lang)}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default RecentShippements