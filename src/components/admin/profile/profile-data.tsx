'use client';

import { Locale } from "@/i18n.config";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AuthenticatedUser, DictionaryEntry } from "@/types";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminProfileData({ lang, dict, user }: { lang: Locale, dict: DictionaryEntry, user: AuthenticatedUser }) {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-y-hidden">
      <div className="relative overscroll-y-none">
        <Avatar className="w-[200px] h-[200px]">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex justify-center items-center absolute top-[170px] right-[20px] bg-black dark:bg-white w-[40px] h-[40px] rounded-full z-50">
          <Link className="dark:text-black text-white" href={"/admin/settings"}><Pencil /></Link>
        </div>
      </div>
      <div className="my-5 text-center overscroll-y-none">
        <h2 className="font-bold">{user.displayName}</h2>
        <Card className={cn("flex flex-col items-center my-5")}>
          <CardHeader className="text-center">
            <CardTitle>{dict.admin.profile.details}</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-2">
            <CardContent className="text-center">
              <CardDescription>{dict.admin.settings.firstName}</CardDescription>
              <p>{user.firstname}</p>
            </CardContent>
              <CardContent className="text-center">
              <CardDescription>{dict.admin.settings.lastName}</CardDescription>
              <p>{user.lastName}</p>
            </CardContent>
          </div>
          <CardContent className="text-center">
            <CardDescription>{dict.admin.profile.email}</CardDescription>
            <p>{user.email}</p>
          </CardContent>
          <CardContent className="text-center">
            <CardDescription>{dict.admin.profile.dob}</CardDescription>
            <p>{user.dob}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}