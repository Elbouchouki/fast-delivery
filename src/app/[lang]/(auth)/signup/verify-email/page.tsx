import { type Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { VerifyEmailForm } from "@/components/forms/verify-email-form"
import { Shell } from "@/components/shells/shell"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to continue with your sign up",
}

export default async function VerifyEmailPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {dict.auth.signup.verifyEmail.action}
          </CardTitle>
          <CardDescription>
            {dict.auth.signup.verifyEmail.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VerifyEmailForm dict={dict} />
        </CardContent>
      </Card>
    </Shell>
  )
}
