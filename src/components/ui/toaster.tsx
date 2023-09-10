"use client"

import { Locale } from "@/i18n.config"
import { Toaster as RadToaster } from "sonner"

export function Toaster({
  lang
}: {
  lang: Locale
}) {
  return (
    <RadToaster
      position={lang === "ar" ? "bottom-left" : "bottom-right"}
      toastOptions={{
        style: {
          background: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
      }}
    />
  )
}
