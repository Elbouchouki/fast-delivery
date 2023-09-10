import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Locale } from "@/i18n.config"
import { ARNumber, cn } from "@/lib/utils"
import { DashboardCard } from "../../types"


type DashboardCardProps = {
  lang: Locale
  card: DashboardCard
}

const DashboardCard = ({ lang, card }: DashboardCardProps) => {

  const NumberFormat = ARNumber(lang)

  return (
    <Card>
      <CardHeader className={cn("flex flex-row items-center justify-between space-y-0 pb-2", {
        "flex-row-reverse": lang === "ar"
      })}>
        <CardTitle className={cn("text-sm font-medium", {
          "text-right": lang === "ar"
        })}>
          {card.text}
        </CardTitle>
        <card.icon />
      </CardHeader>
      <CardContent>
        <div
          className={cn("text-2xl font-bold", {
            "text-right": lang === "ar"
          })}>
          {NumberFormat.format(card.count)}
        </div>
        <p
          className={cn("text-xs text-muted-foreground", {
            "text-right": lang === "ar"
          })}>
          {card.subText}
        </p>
      </CardContent>
    </Card>
  )
}
export default DashboardCard