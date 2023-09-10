import { Locale } from "@/i18n.config";
import { DashboardCard, RecentShippementsType } from "@/types";
import { Blocks, Kanban, KanbanSquareDashedIcon, KanbanSquareIcon, LayoutListIcon, Package, Package2Icon, PackagePlusIcon, TruckIcon, Users2Icon } from "lucide-react";

const DASHBOARD_CARDS_MOCK_EN: DashboardCard[] = [
  {
    count: 625,
    text: "Total Shipments",
    subText: "+16% since last month",
    icon: TruckIcon
  },
  {
    count: 8841,
    text: "Total Used Shelves",
    subText: "512 additional shelves",
    icon: Package2Icon
  },
  {
    count: 90211,
    text: "Total Items in Inventory",
    subText: "2,000 additional items",
    icon: KanbanSquareDashedIcon
  }, {
    count: 265,
    text: "Total Items",
    subText: "",
    icon: KanbanSquareIcon
  },
  {
    count: 72,
    text: "Total Sellers",
    subText: "+5 since last month",
    icon: Users2Icon
  },
  {
    count: 72,
    text: "Total Expired Items in Inventory",
    subText: "",
    icon: Kanban
  }
]

const DASHBOARD_CARDS_MOCK_AR: DashboardCard[] = [
  {
    count: 625,
    text: "إجمالي الشحنات",
    subText: "+16 منذ الشهر الماضي",
    icon: TruckIcon
  },
  {
    count: 8841,
    text: "إجمالي الرفوف المستخدمة",
    subText: "512 رفاً إضافيين",
    icon: Package2Icon
  },
  {
    count: 90211,
    text: "إجمالي العناصر في المخزون",
    subText: "2,000 عنصر إضافي",
    icon: KanbanSquareDashedIcon
  },
  {
    count: 265,
    text: "إجمالي العناصر",
    subText: "",
    icon: KanbanSquareIcon
  },
  {
    count: 72,
    text: "إجمالي البائعين",
    subText: "+5 منذ الشهر الماضي",
    icon: Users2Icon
  },
  {
    count: 72,
    text: "إجمالي العناصر المنتهية صلاحيتها في المخزون",
    subText: "",
    icon: Kanban
  }
]

const DASHBOARD_TODAY_ANALYTICS_MOCK_EN: DashboardCard[] = [
  {
    count: 354,
    text: "Order Generated",
    subText: "+9.5% since yesterday",
    icon: Blocks
  }, {
    count: 230,
    text: "Order Created",
    subText: "+12.75% since yesterday",
    icon: PackagePlusIcon
  }, {
    count: 205,
    text: "Picklist Generated",
    subText: "",
    icon: LayoutListIcon
  }, {
    count: 22,
    text: "Assiging to Pickers",
    subText: "+2.5% since yesterday",
    icon: Users2Icon
  }, {
    count: 84,
    text: "Packed",
    subText: "70 new packed orders",
    icon: Package
  }, {
    count: 152,
    text: "Dispached to LM",
    subText: "+87 orders since yesterday",
    icon: TruckIcon
  }
]

const DASHBOARD_TODAY_ANALYTICS_MOCK_AR: DashboardCard[] = [
  {
    count: 354,
    text: "تم إنشاء الطلب",
    subText: "+9.5% منذ الأمس",
    icon: Blocks
  },
  {
    count: 230,
    text: "تم إنشاء الطلب",
    subText: "+12.75% منذ الأمس",
    icon: PackagePlusIcon
  },
  {
    count: 205,
    text: "تم إنشاء قائمة الاختيار",
    subText: "",
    icon: LayoutListIcon
  },
  {
    count: 22,
    text: "تخصيص للمنتقين",
    subText: "+2.5% منذ الأمس",
    icon: Users2Icon
  },
  {
    count: 84,
    text: "تم التعبئة",
    subText: "70 طلب جديد تم التعبئة",
    icon: Package
  },
  {
    count: 152,
    text: "تم الشحن إلى إدارة المستودع",
    subText: "+87 طلبًا منذ الأمس",
    icon: TruckIcon
  }
]

const RECENT_SHIPPEMENTS_MOCK_AR: RecentShippementsType[] = [
  {
    picker: {
      name: "البوشوكي أحمد",
      email: "elbouchoukigamer@email.com",
      avatar: "/avatars/avatar1.png",
      avatarFallback: "EA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 2,
      name: "Macbook Pro 2021",
      price: 1999
    }
  }, {
    picker: {
      name: "أحمد",
      email: "Ahmed@mail.com",
      avatar: "/avatars/avatar2.png",
      avatarFallback: "AA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 1,
      name: "LG 4K شاشة ",
      price: 5000
    }
  }, {
    picker: {
      name: "فاطمة",
      email: "Fatima@mail.com",
      avatar: "/avatars/avatar3.png",
      avatarFallback: "FA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 1,
      name: "Samsung Galaxy S21",
      price: 2000
    }
  }
]

const RECENT_SHIPPEMENTS_MOCK_EN: RecentShippementsType[] = [
  {
    picker: {
      name: "Elbouchouki Ahmed",
      email: "elbouchoukigamer@email.com",
      avatar: "/avatars/avatar1.png",
      avatarFallback: "EA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 2,
      name: "Macbook Pro 2021",
      price: 1999
    }
  }, {
    picker: {
      name: "Ahmed",
      email: "Ahmed@mail.com",
      avatar: "/avatars/avatar2.png",
      avatarFallback: "AA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 1,
      name: "LG 4K Monitor",
      price: 5000
    }
  }, {
    picker: {
      name: "Fatima",
      email: "Fatima@mail.com",
      avatar: "/avatars/avatar3.png",
      avatarFallback: "FA"
    },
    shippedAt: new Date(),
    package: {
      quantity: 1,
      name: "Samsung Galaxy S21",
      price: 2000

    }
  }
]

export const GET_RECENT_SHIPPEMENTS_MOCK = (lang: Locale) => {
  const RECENT_SHIPPEMENTS_MOCK = {
    ar: RECENT_SHIPPEMENTS_MOCK_AR as RecentShippementsType[],
    en: RECENT_SHIPPEMENTS_MOCK_EN as RecentShippementsType[]
  }
  return RECENT_SHIPPEMENTS_MOCK[lang] as RecentShippementsType[]
}

export const GET_DASHBOARD_CARDS_MOCK = (lang: Locale) => {
  const DASHBOARD_CARDS_MOCK = {
    ar: DASHBOARD_CARDS_MOCK_AR as DashboardCard[],
    en: DASHBOARD_CARDS_MOCK_EN as DashboardCard[]
  }
  return DASHBOARD_CARDS_MOCK[lang] as DashboardCard[]
}

export const GET_DASHBOARD_TODAY_ANALYTICS_MOCK = (lang: Locale) => {
  const DASHBOARD_TODAY_ANALYTICS_MOCK = {
    ar: DASHBOARD_TODAY_ANALYTICS_MOCK_AR as DashboardCard[],
    en: DASHBOARD_TODAY_ANALYTICS_MOCK_EN as DashboardCard[]
  }
  return DASHBOARD_TODAY_ANALYTICS_MOCK[lang] as DashboardCard[]
}