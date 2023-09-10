"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { DictionaryEntry } from "../../types"

export function LogOutButtons({
  dict
}: {
  dict: DictionaryEntry
}) {
  const router = useRouter()
  const mounted = useMounted()
  const [isPending, startTransition] = React.useTransition()

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <Button
          onClick={() => {
            console.log("logout")
            console.log("call signOut in logout-buttons.tsx")
          }}
          aria-label={dict.auth.logout.logout}
          size="sm"
          className="w-full"
          disabled={isPending}
        >
          {isPending && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          {dict.auth.logout.logout}
        </Button>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full bg-muted text-muted-foreground"
          )}
        >
          {dict.auth.logout.logout}
        </Skeleton>
      )}
      <Button
        aria-label={dict.auth.logout.goBack}
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        {dict.auth.logout.goBack}
      </Button>
    </div>
  )
}
