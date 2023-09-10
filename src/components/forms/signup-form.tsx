"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { authSchema } from "@/lib/validations/auth"
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
import { PasswordInput } from "@/components/password-input"
import { getPathLocale } from "@/lib/utils"
import { DictionaryEntry } from "../../types"

type Inputs = z.infer<typeof authSchema>

export function SignUpForm({
  dict
}: {
  dict: DictionaryEntry
}) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  function onSubmit(data: Inputs) {
    setIsLoading(true)
    startTransition(async () => {
      setTimeout(() => {
        setIsLoading(false)
        toast.success(dict.auth.signup.successToast.message, {
          description: dict.auth.signup.successToast.description
        })
        router.push(`${window.location.origin}/${getPathLocale(window.location.pathname)}/signup/verify-email`)
      }, 500)
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.formLabels.email}</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.formLabels.password}</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending || isLoading}>
          {(isPending || isLoading) && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {dict.auth.signup.continue}
          <span className="sr-only">{dict.auth.signup.continueSROnly}</span>
        </Button>
      </form>
    </Form>
  )
}
