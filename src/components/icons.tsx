import {
  AlarmClock,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  Copy,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  Footprints,
  HardHat,
  Image,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Send,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Star,
  SunMedium,
  Trash,
  Twitter,
  UploadCloud,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  star: Star,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  menu: Menu,
  verticalThreeDots: MoreVertical,
  horizontalThreeDots: MoreHorizontal,
  verticalSliders: Sliders,
  horizontalSliders: SlidersHorizontal,
  circle: Circle,
  check: Check,
  add: Plus,
  addCircle: PlusCircle,
  remove: Minus,
  view: Eye,
  hide: EyeOff,
  trash: Trash,
  edit: Edit,
  crop: Crop,
  reset: RefreshCw,
  send: Send,
  copy: Copy,
  downlaod: Download,
  warning: AlertTriangle,
  search: Search,
  filter: Filter,
  alarm: AlarmClock,
  calendar: CalendarDays,
  user: User,
  terminal: FileTerminal,
  settings: Settings,
  logout: LogOut,
  volumne: Volume2,
  volumneMute: VolumeX,
  message: MessageSquare,
  billing: CreditCard,
  wallet: Wallet,
  dollarSign: DollarSign,
  cart: ShoppingCart,
  product: Package,
  store: ShoppingBag,
  chart: BarChart3,
  upload: UploadCloud,
  placeholder: Image,
  clothing: Shirt,
  shoes: Footprints,
  accessories: HardHat,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
      <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="discord"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  arabic: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-sa" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="sa-a">
          <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#sa-a)" transform="translate(80) scale(.9375)">
        <path fill="#165d31" d="M-128 0h768v512h-768z" />
        <path fill="#fff" d="M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 0 0-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 0 1-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 0 0 .3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 0 0-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z" />
        <path fill="#fff" d="m99 194.2-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z" />
        <path fill="#fff" d="M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 0 1-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z" />
        <path fill="#fff" d="M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 0 0-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 0 1 .8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 0 0-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0 1 53.8 86.5c2.6-1.3 2-16.1.5-18.2z" />
        <path fill="#fff" d="M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 0 0 5.3-14.2 317 317 0 0 0-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 0 0-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 0 1-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 0 0 4.2-16 303 303 0 0 0-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 0 0-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z" />
        <path fill="#fff" d="M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 0 0-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 0 1 .4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 0 0 299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 0 1 .4 49c3 .1 7.6-4.7 9.3-11.8z" />
        <path fill="#fff" d="M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 0 0-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 0 0-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z" />
        <path fill="#165d31" d="M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z" />
        <path fill="#fff" d="M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 0 1-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 0 0 2 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 0 1 2 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 0 0-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z" />
        <path fill="#fff" d="M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 0 1 9.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 0 0-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 0 1 3.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0 0 22.3-23.3 51 51 0 0 0-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z" />
        <path fill="#fff" d="M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 0 0 6.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 0 0-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z" />
        <path fill="#fff" d="M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 0 0-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z" />
        <path fill="#165d31" d="M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z" />
        <path fill="#fff" d="M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 0 1 .5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 0 0 2.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 0 0-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 0 1-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 0 1 5.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 0 0 1.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z" />
        <path fill="#165d31" d="M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3zM355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z" />
      </g>
    </svg>
  ),
  english: ({ ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480" {...props}>
      <path fill="#bd3d44" d="M0 0h640v480H0" />
      <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
      <marker id="us-a" markerHeight="30" markerWidth="30">
        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
      </marker>
      <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0" />
    </svg>
  )
}