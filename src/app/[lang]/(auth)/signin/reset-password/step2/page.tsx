import { type Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResetPasswordStep2Form } from "@/components/forms/reset-password-form-step2"
import { Shell } from "@/components/shells/shell"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
}

export default async function ResetPasswordStep2Page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{dict.auth.signin.resetPassword.action}</CardTitle>
          <CardDescription>
            {dict.auth.signin.resetPassword.entreEmail}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordStep2Form dict={dict} />
        </CardContent>
      </Card>
    </Shell>
  )
}
