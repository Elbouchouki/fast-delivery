
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"
import { BanknoteIcon, CircleDollarSignIcon, LandmarkIcon } from "lucide-react"

export const orderTypes = [
  {
    value: "b2c",
    label: "B2C",
  },
  {
    value: "b2b",
    label: "B2B",
  },
  {
    value: "c2c",
    label: "C2C",
  },
  {
    value: "c2b",
    label: "C2B",
  },
]

export const companies = [
  {
    value: "amazon",
    label: "Amazon",
  },
  {
    value: "noon",
    label: "Noon",
  },
  {
    value: "ebay",
    label: "Ebay",
  },
  {
    value: "aliexpress",
    label: "Aliexpress",
  },
  {
    value: "souq",
    label: "Souq",
  }
]

export const pickers = [
  {
    value: "ahmed",
    label: "Ahmed",
  },
  {
    value: "mohamed",
    label: "Mohamed",
  },
  {
    value: "ali",
    label: "Ali",
  },
  {
    value: "khaled",
    label: "Khaled",
  },
  {
    value: "youssef",
    label: "Youssef",
  }
]

export const sellers = [
  {
    value: "ahmed",
    label: "Ahmed",
  },
  {
    value: "mohamed",
    label: "Mohamed",
  },
  {
    value: "ali",
    label: "Ali",
  },
  {
    value: "khaled",
    label: "Khaled",
  },
  {
    value: "youssef",
    label: "Youssef",
  }
]

export const payementModes = [
  {
    value: "cash",
    label: "Cash",
    icon: CircleDollarSignIcon
  },
  {
    value: "credit",
    label: "Credit",
    icon: BanknoteIcon
  },
  {
    value: "bank",
    label: "Bank",
    icon: LandmarkIcon
  }
]

export const labels = [
  {
    value: "experienced",
    label: "Experience",
  },
  {
    value: "new",
    label: "New",
  },
  {
    value: "entrepreneur",
    label: "Entrepreneur",
  },
]

export const statuses = [
  {
    value: "new",
    label: "New",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "pending",
    label: "Pending",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]


export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]



export const warehouse = [
  {
    value: "riadh-central",
    label: "Riadh Central"
  },
  {
    value: "afif-warehouse",
    label: "Afif Warehouse"
  },
  {
    value: "saudi-arabia-railway",
    label: "Saudi Arabia Railway"
  }
]