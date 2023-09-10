"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { DictionaryEntry } from "../../types"


export function OAuthSignIn({
  dict
}: {
  dict: DictionaryEntry
}) {
  const [isLoading, setIsLoading] = React.useState<string | null>(null)

  const oauthProviders = [
    { name: dict.auth.oauthSignin.google, icon: "google" },
    { name: dict.auth.oauthSignin.facebook, icon: "facebook" },
    { name: dict.auth.oauthSignin.discord, icon: "discord" },
  ] satisfies {
    name: string
    icon: keyof typeof Icons
  }[]

  async function oauthSignIn(provider: string) {
    setIsLoading(provider)
    setTimeout(() => {
      toast.success(dict.auth.oauthSignin.successToast.message)
      setIsLoading(null)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]
        return (
          <Button
            aria-label={`${dict.auth.oauthSignin.signinWith} ${provider.name}`}
            key={provider.name}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void oauthSignIn(provider.name)}
            disabled={isLoading !== null}
          >
            {isLoading === provider.name ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        )
      })}
    </div>
  )
}
