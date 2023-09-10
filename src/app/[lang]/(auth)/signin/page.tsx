import { type Metadata } from "next"
import Link from "next/link"

import { redirect } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { OAuthSignIn } from "@/components/auth/oauth-signin"
import { SignInForm } from "@/components/forms/signin-form"
import { Shell } from "@/components/shells/shell"
import { OAuthSignIn } from "@/components/auth/oauth-signin"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

export default async function SignInPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  // const user = await currentUser()
  // if (user) redirect("/")

  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{dict.auth.signin.action}</CardTitle>
          <CardDescription>
            {dict.auth.signin.signinMethod}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn dict={dict} />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {dict.auth.signin.continueWith}
              </span>
            </div>
          </div>
          <SignInForm dict={dict} />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground flex flex-row">
            <span className="mr-1 hidden sm:inline-block">
              {dict.auth.signin.noAccount}
            </span>
            <Link
              aria-label={dict.auth.signup.action}
              href={`/${lang}/signup`}
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              {dict.auth.signup.action}
            </Link>
          </div>
          <Link
            aria-label={dict.auth.signin.resetPassword.action}
            href={`/${lang}/signin/reset-password`}
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            {dict.auth.signin.resetPassword.action}
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  )
}
