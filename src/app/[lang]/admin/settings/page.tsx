import { type Metadata } from "next";
import { Locale } from "@/i18n.config";
import { cn } from "@/lib/utils"
import { getDictionary } from "@/lib/dictionary";
import { AuthenticatedUser } from "@/types";
import { GET_USER_MOCK } from "@/mock/user";
import AdminProfileSettings from "@/components/admin/settings/profile-setings";
import { Separator } from "@/components/ui/separator";
import AdminFooter from "@/components/admin/admin-footer";

export const metadata: Metadata = {
  title: "Admin Profile Settings",
  description: "Profile Settings, Update profile data.",
}

export default async function AdminSettingsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang);

  const user: AuthenticatedUser = GET_USER_MOCK(lang);

  return (
    <div className="flex flex-col max-w-full space-y-8 grow">
      <div className={cn("h-16 flex flex-col items-start justify-between space-y-2 lg:flex-row md:space-y-0", {
        "lg:flex-row-reverse flex-col-reverse": lang === "ar"
      })}>
        <h2 className={cn("w-full text-3xl font-bold tracking-tight", {
          "text-right": lang === "ar"
        })}>
          {dict.admin.settings.accountSettings}
        </h2>
      </div>
      <Separator className="my-4" />
      <div className="w-full">
        <AdminProfileSettings lang={lang} dict={dict} user={user} />
      </div>
      <AdminFooter className="py-0 pb-6" dict={dict} lang={lang} />
    </div>
  );
}