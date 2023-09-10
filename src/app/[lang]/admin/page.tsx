import { type Metadata } from "next"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { CalendarDateRangePicker } from "@/components/admin/date-range-picker"
import DashboardCard from "@/components/admin/dashboard-card"
import ShippementAnalytics from "@/components/admin/shippement-analytics"
import RecentShippements from "@/components/admin/recent-shippements"
import { cn } from "@/lib/utils"
import { GET_DASHBOARD_CARDS_MOCK, GET_DASHBOARD_TODAY_ANALYTICS_MOCK } from "@/mock/dashboard"
import AdminFooter from "@/components/admin/admin-footer"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
}


export default async function AdminPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  const DASHBOARD_CARDS_MOCK = GET_DASHBOARD_CARDS_MOCK(lang)

  const DASHBOARD_TODAY_ANALYTICS_MOCK = GET_DASHBOARD_TODAY_ANALYTICS_MOCK(lang)

  return (
    <div className="w-full h-full my-3 space-y-8 grow">
      <div className={cn("flex flex-col items-start justify-between space-y-2 lg:flex-row md:space-y-0", {
        "lg:flex-row-reverse flex-col-reverse": lang === "ar"
      })}>
        <h2 className={cn("w-full text-3xl font-bold tracking-tight", {
          "text-right": lang === "ar"
        })}>
          {dict.admin.dashboard.title}
        </h2>
        <CalendarDateRangePicker
          lang={lang}
          className={cn("self-end", {
            "self-start": lang === "ar"
          })} dict={dict} />
      </div >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          DASHBOARD_CARDS_MOCK.map((card, index) => (
            <DashboardCard lang={lang} key={index} card={card}></DashboardCard>
          ))
        }
      </div>
      <h4 className={cn("text-lg font-bold tracking-tight", {
        "text-right": lang === "ar"
      })}>
        {dict.admin.dashboard.todaysAnalytics}
      </h4>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {
          DASHBOARD_TODAY_ANALYTICS_MOCK.map((card, index) => (
            <DashboardCard lang={lang} key={index} card={card}></DashboardCard>
          ))
        }
      </div>
      <h4 className={cn("text-lg font-bold tracking-tight", {
        "text-right": lang === "ar"
      })}>
        {dict.admin.dashboard.shippementsAnalytics}
      </h4>
      <ShippementAnalytics dict={dict} lang={lang} />
      <h4 className={cn("text-lg font-bold tracking-tight", {
        "text-right": lang === "ar"
      })}>
        {dict.admin.dashboard.recentShippements}
      </h4>
      <RecentShippements dict={dict} lang={lang} />
      <AdminFooter lang={lang} dict={dict} />
    </div>
  )
}
