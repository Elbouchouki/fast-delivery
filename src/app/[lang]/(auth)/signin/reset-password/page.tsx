import { type Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResetPasswordForm } from "@/components/forms/reset-password-form"
import { Shell } from "@/components/shells/shell"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
}

export default async function ResetPasswordPage({
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
            {dict.auth.signin.resetPassword.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm dict={dict} />
        </CardContent>
      </Card>
    </Shell>
  )
}
