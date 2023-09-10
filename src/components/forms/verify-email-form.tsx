"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { verfifyEmailSchema } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { getPathLocale } from "@/lib/utils"
import { DictionaryEntry } from "../../types"

type Inputs = z.infer<typeof verfifyEmailSchema>

export function VerifyEmailForm({
  dict
}: {
  dict: DictionaryEntry
}) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)


  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(verfifyEmailSchema),
    defaultValues: {
      code: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      setIsLoaded(true)
      setTimeout(() => {
        setIsLoaded(false)
        router.push(`${window.location.origin}/${getPathLocale(window.location.pathname)}/admin`)
      }, 2000)
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.auth.signup.verifyEmail.verificationCode}</FormLabel>
              <FormControl>
                <Input
                  placeholder="169420"
                  {...field}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim()
                    field.onChange(e)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending || isLoaded}>
          {(isPending || isLoaded) && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {dict.auth.signup.verifyEmail.action}
          <span className="sr-only">{dict.auth.signup.verifyEmail.action}</span>
        </Button>
      </form>
    </Form>
  )
}
