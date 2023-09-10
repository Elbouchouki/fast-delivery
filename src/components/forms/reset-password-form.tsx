"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

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
import { checkEmailSchema } from "@/lib/validations/auth"
import { getPathLocale } from "@/lib/utils"
import { DictionaryEntry } from "../../types"

type Inputs = z.infer<typeof checkEmailSchema>

export function ResetPasswordForm({
  dict
}: {
  dict: DictionaryEntry
}) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        router.push(`/${getPathLocale(window.location.pathname)}/signin/reset-password/step2`)
        toast.message(dict.auth.signin.resetPassword.successToast.message, {
          description: dict.auth.signin.resetPassword.successToast.description,
        })
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
        <Button disabled={isPending || isLoading}>
          {(isPending || isLoading) && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {dict.auth.signin.resetPassword.continue}
          <span className="sr-only">
            {dict.auth.signin.resetPassword.continueSROnly}
          </span>
        </Button>
      </form>
    </Form>
  )
}
