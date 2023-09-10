import { Locale } from "@/i18n.config"
import { AuthenticatedUser } from "@/types"

const USER_MOCK_EN: AuthenticatedUser = {
  id: "1",
  firstname: "Elbouchouki",
  lastName: "Ahmed",
  displayName: "Elbouchouki Ahmed",
  email: "elbouchouki@gmail.com",
  dob: "26 Aug 1985",
  avatar: "/avatars/avatar1.png",
  avatarFallback: "EA"
}

const USER_MOCK_AR: AuthenticatedUser = {
  id: "1",
  firstname: "Elbouchouki",
  lastName: "Ahmed",
  displayName: "البوشوكي أحمد",
  email: "elbouchouki@gmail.com",
  dob: "26 Aug 1985",
  avatar: "/avatars/avatar1.png",
  avatarFallback: "EA"
}


export const GET_USER_MOCK = (lang: Locale) => {
  const USER_MOCK = {
    ar: USER_MOCK_AR,
    en: USER_MOCK_EN
  }
  return USER_MOCK[lang]
}