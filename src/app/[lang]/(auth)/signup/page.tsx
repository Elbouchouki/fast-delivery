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
import { OAuthSignIn } from "@/components/auth/oauth-signin"
import { SignUpForm } from "@/components/forms/signup-form"
import { Shell } from "@/components/shells/shell"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
}

export default async function SignUpPage({
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
          <CardTitle className="text-2xl">
            {dict.auth.signup.action}
          </CardTitle>
          <CardDescription>
            {dict.auth.signup.signupMethod}
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
                {dict.auth.signup.continueWith}
              </span>
            </div>
          </div>
          <SignUpForm dict={dict} />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            {dict.auth.signup.haveAccount}{" "}
            <Link
              aria-label={dict.auth.signup.action}
              href={`/${lang}/signin`}
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              {dict.auth.signup.action}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}
