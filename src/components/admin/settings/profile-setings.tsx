'use client';

import { Locale } from "@/i18n.config";
import { cn } from "@/lib/utils"
import { AuthenticatedUser } from "@/types"
import { DictionaryEntry } from "@/types";
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react";
import { InputFile } from "./input-file";
import { useState } from "react";

export default function AdminProfileSettings({ lang, dict, user }: { lang: Locale, dict: DictionaryEntry, user: AuthenticatedUser }) {

  const [inputFileView, setInputFileView] = useState<boolean>(false);

  const profileFormSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: dict.admin.settings.usernameMin,
      })
      .max(30, {
        message: dict.admin.settings.usernameMax,
      }),
    firstName: z
      .string()
      .min(2, {
        message: dict.admin.settings.usernameMin,
      })
      .max(30, {
        message: dict.admin.settings.usernameMax,
      }),
      lastName: z
      .string()
      .min(2, {
        message: dict.admin.settings.usernameMin,
      })
      .max(30, {
        message: dict.admin.settings.usernameMax,
      }),
    email: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
    dob: z
      .date(),
  });

  type ProfileFormValues = z.infer<typeof profileFormSchema>

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: user.firstname,
      lastName: user.lastName,
      username: user.displayName,
      email: user.email,
      dob: undefined,
    },
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8", {
          "text-right": lang === "ar"
        })}>
        <div className="flex flex-col md:flex-row justify-center items-center overscroll-y-none w-full">
          <div className="mr-[50px]">
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.avatarFallback}</AvatarFallback>
            </Avatar>
            <Button className="dark:text-black text-white" onClick={() => setInputFileView(view => !view)}><Upload /></Button>
          </div>
          {inputFileView && <InputFile className={"max-w-sm h-full"} />}
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.admin.settings.username}</FormLabel>
              <FormControl>
                <Input placeholder={user.displayName} {...field} />
              </FormControl>
              <FormDescription>
                {dict.admin.settings.usernameDesc}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.admin.settings.firstName}</FormLabel>
                <FormControl>
                  <Input placeholder={user.firstname} {...field} />
                </FormControl>
                <FormDescription>
                  {dict.admin.settings.firstNameDesc}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.admin.settings.lastName}</FormLabel>
              <FormControl>
                <Input placeholder={user.lastName} {...field} />
              </FormControl>
              <FormDescription>
                {dict.admin.settings.lastNameDesc}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.admin.settings.email}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={user.email} />
              </FormControl>
              <FormDescription>
                {dict.admin.settings.emailDesc}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{dict.admin.settings.updateProfile}</Button>
      </form>
    </Form>
  );
}