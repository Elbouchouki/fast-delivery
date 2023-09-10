import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Locale } from "@/i18n.config"
import { cn } from "@/lib/utils"
import { GET_USER_MOCK } from "@/mock/user"
import { DictionaryEntry } from "@/types"
import Link from "next/link"

export function UserNav({
  lang,
  dict
}: {
  lang: Locale,
  dict: DictionaryEntry
}) {


  const user = GET_USER_MOCK(lang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.avatar} alt={`${user.displayName}'s avatar`} />
            <AvatarFallback>
              {user.avatarFallback}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className={cn("text-sm font-medium leading-none", {
              "text-right": lang === "ar"
            })}>
              {user.displayName}
            </p>
            <p className={cn("text-xs leading-none text-muted-foreground", {
              "text-right": lang === "ar"
            })}>
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/${lang}/admin/profile`}>
            <DropdownMenuItem className={cn("flex justify-between w-full", {
              "flex-row-reverse": lang === "ar"
            })}>
              <span>{dict.admin.userNav.profile}</span>
              <div>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </div>
            </DropdownMenuItem>
          </Link>
          <Link href={`/${lang}/admin/settings`}>
            <DropdownMenuItem className={cn("flex justify-between w-full", {
              "flex-row-reverse": lang === "ar"
            })}>
              <span>{dict.admin.userNav.settings}</span>
              <div>
                <DropdownMenuShortcut >⌘S</DropdownMenuShortcut>
              </div>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href={`/${lang}/signin`}>
          <DropdownMenuItem
            className={cn("flex justify-between w-full", {
              "flex-row-reverse": lang === "ar"
            })}>
            <span>{dict.admin.userNav.logout}</span>
            <div>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}