import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"
import AppLogo from "@/components/app-logo"

export default async function AuthLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {

  const dict = await getDictionary(lang)

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/images/auth-layout.webp"
          alt="A skateboarder doing a high drop"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <div className="absolute z-20 left-8 top-6">
          <AppLogo lang={lang} dict={dict} />
        </div>
        <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base">
          © {new Date().getFullYear()} {dict.appName}
        </div>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  )
}