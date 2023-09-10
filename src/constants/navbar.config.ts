import { Locale } from "@/i18n.config";
import { SidebarItem } from "@/types"
import { BoxesIcon, HomeIcon, LuggageIcon, Package2Icon, PackageOpenIcon, PackagePlus, PackageXIcon, RadarIcon, TruckIcon } from 'lucide-react';


const SIDEBAR_ITEMS_EN: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    href: "/admin",
  }, {
    name: "Order Generated",
    icon: Package2Icon,
    href: "/admin/order-generated",
    notifCount: 21,
  }, {
    name: "Order Created",
    icon: PackagePlus,
    href: "/admin/order-created",
    notifCount: 7,
  }, {
    name: "Pick List",
    icon: PackageOpenIcon,
    href: "/admin/pick-list",
    notifCount: 16,
  }, {
    name: "Packed",
    icon: BoxesIcon,
    href: "/admin/packed",
    notifCount: 25,
  }, {
    name: "Dispatched",
    icon: LuggageIcon,
    href: "/admin/dispatched",
    notifCount: 124,
  }, {
    name: "Delivery Manifest",
    icon: TruckIcon,
    href: "/admin/delivery-manifest",
  }, {
    name: "Delivered",
    icon: RadarIcon,
    href: "/admin/delivered",
    notifCount: 2,
  }, {
    name: "Returned",
    icon: PackageXIcon,
    href: "/admin/returned",
    notifCount: 1,
  }
]

const SIDEBAR_ITEMS_AR: SidebarItem[] = [
  {
    name: "لوحة التحكم",
    icon: HomeIcon,
    href: "/admin",
  },
  {
    name: "تم إنشاء الطلب",
    icon: Package2Icon,
    href: "/admin/order-generated",
    notifCount: 21,
  },
  {
    name: "تم إنشاء الطلب",
    icon: PackagePlus,
    href: "/admin/order-created",
    notifCount: 7,
  },
  {
    name: "قائمة التعبئة",
    icon: PackageOpenIcon,
    href: "/admin/pick-list",
    notifCount: 16,
  },
  {
    name: "تم التعبئة",
    icon: BoxesIcon,
    href: "/admin/packed",
    notifCount: 25,
  },
  {
    name: "تم الشحن",
    icon: LuggageIcon,
    href: "/admin/dispatched",
    notifCount: 124,
  },
  {
    name: "تصدير الشحنة",
    icon: TruckIcon,
    href: "/admin/delivery-manifest",
  },
  {
    name: "تم التسليم",
    icon: RadarIcon,
    href: "/admin/delivered",
    notifCount: 2,
  },
  {
    name: "تم الإرجاع",
    icon: PackageXIcon,
    href: "/admin/returned",
    notifCount: 1,
  }
]


export const GET_SIDEBAR_ITEMS = (lang: Locale) => {
  const SIDEBAR_ITEMS = {
    ar: SIDEBAR_ITEMS_AR as SidebarItem[],
    en: SIDEBAR_ITEMS_EN as SidebarItem[]
  }
  return SIDEBAR_ITEMS[lang] as SidebarItem[]
}