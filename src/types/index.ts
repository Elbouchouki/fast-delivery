import { z } from "zod"


export type AuthenticatedUser = {
  id: string,
  displayName: string,
  firstname: string,
  lastName: string,
  email: string,
  dob: string,
  avatar: string,
  avatarFallback?: string,
}

export type fullfillment = {
  id: number,
  serialNumber: string,
  sku: string,
  refNo: string,
  shipmentType: string,
  receiverDetails: Receiver,
  senderDetails: Sender,
  quantity: number,
  status: string,
  city: string,
  district: string,
  address1: string,
  address2: string | null,
  mobile: string,
  email: string | null,
  codVal: number,
  noOfPieces: number,
  service: string,
  weight: string,
  description: string | null,
}

export type Sender = {
  serialNumber: string,
  secretKey: string
  name: string,
  companyName: string,
  mobile: string,
  email: string,
  city: string,
  accountId: string,
  address: string,
  country: string,
  invoiceType: string,
}

export type Receiver = {
  name: string,
  mobile: string,
  email: string,
  city: string,
  accountId: string,
  address: string,
  country: string,
}

export type ThirdPartyLogistics = {
  id: number,
  serialNumber: string,
  name: string,
  delivered: number,
  return: number,
  deliveryPerformance: number,
}

export type Ticket = {
  id: number,
  serialNumber: string,
  manifestId: string
  subject: string,
  message: string,
  status: string,
  createdDate: Date,
  actions: string,
}

export type Offer = {
  id: number,
  serialNumber: string,
  promoCode: string,
  sku: string,
  qty: number,
  startDate: Date,
  expireDate: Date,
  expired: boolean,
  status: string,
}

export type Inventory = {
  id: number,
  serialNumber: string,
  date: Date,
  qtyScanned: number,
  qtyPending: number,
  updatedBy: string,
}

export type Invoice = {
  id: number,
  serialNumber: string,
  awbNo: string,
  invoiceNo: string,
  pickingCharge: number,
  packingCharge: number,
  specialPacking: number,
  returnCharge: number,
  outboundCharge: number,
  shippingCharge: number,
  cancelCharge: number | null,
  boxCharge: number,
  sellerName: string,
  month: string,
  createdDate: Date,
  payStatus: boolean,
  payDate: Date | null,
  payUpdatedBy: string | null,
  payCreatedBy: string,
}

export type Route = { // locations (cities) covered in the service
  serialNumber: string,
  routeCode: string,
  route: string,
  arabicKeyword: string,
  lalt: number,
  long: number,
}

export type Employee = {
  serialNumber: string,
  username: string,
  userType: string, // roles
  email: string,
  mobile: string,
  logo: string | null,
}

export type RecentShippementsType = {
  picker: {
    name: string
    email: string
    avatar: string
    avatarFallback?: string
  }
  shippedAt: Date
  package: {
    quantity: number
    name: string
    price: number
  }
}

export type ShippementChartData = {
  label?: string,
  key: string,
  value: string,
  color: string,
  hoverColor: string,
  className: string
}

export type DashboardCard = {
  count: number,
  text: string,
  langKey?: string,
  subText: string,
  icon: React.ElementType
}

export type SidebarItem = {
  name: string,
  icon: React.ElementType,
  href: string,
  notifCount?: number,
  active?: boolean
}

export interface DictionaryEntry {
  appName: string
  admin: {
    shared: {
      exportToExcel: string
      yes: string
      no: string
      toggleColumns: string
      colHeader: {
        asc: string
        desc: string
        hide: string
      }
      pagination: {
        goToLastPage: string
        goToNextPage: string
        goToPrevious: string
        goToFirstPage: string
        rowSelected: string
        of: string
        page: string
        rowsPerPage: string
      },
      rowActions: {
        view: string
        assignPickupList: string
        printPickupList: string
        printAWB: string
        delete: string
        normalFormat: string
      }
    }
    userNav: {
      profile: string
      settings: string
      logout: string
    }
    layout: {
      search: string
    },
    packed: {
      title: string
    },
    orderGenerated: {
      title: string
      toolbar: {
        generateOrder: string
        generateOrderDescription: string
        generate: string
      }
      dataTable: {
        noResults: string
        labels: {
          id: string,
          orderType: string,
          awb: string,
          company: string,
          origin: string,
          seller: string,
          destination: string,
          receiver: string,
          receiverAdress: string,
          receiverMobile: string,
          payementMode: string,
        }
      }
    },
    orderCreated: {
      title: string,
      toolbar: {
        createOrder: string
        createOrderDescription: string
        create: string
      }
      dataTable: {
        noResults: string
        labels: {
          id: string,
          orderType: string,
          awb: string,
          company: string,
          origin: string,
          seller: string,
          destination: string,
          receiver: string,
          receiverAdress: string,
          receiverMobile: string,
          payementMode: string,
        }
      }
    },
    pickList: {
      title: string,

      toolbar: {
        awbNumber: string
        pickedUpId: string
        dateBetween: string
        resetFilters: string
        noResultsFound: string
        clearFilters: string
        selected: string
      },
      dataTable: {
        noResults: string
        labels: {
          date: string
          pickedUp: string
          packed: string
          priority: string
          status: string
          warehouse: string
          pickupId: string
          id: string
        }
      }
    },
    deliveryManifest: {
      title: string
    },
    returned: {
      title: string
    },
    delivered: {
      title: string
    },
    dispatched: {
      title: string,
      placeholder: string,
      message: string,
      dispatch: string,
      error: string,
      alertTitle: string,
      errTitle: string
    },
    dashboard: {
      title: string
      todaysAnalytics: string
      shippementsAnalytics: string
      recentShippements: string,
    },
    profile: {
      title: string,
      details: string,
      email: string,
      dob: string
    },
    settings: {
      accountSettings: string,
      username: string,
      firstName: string,
      lastName: string,
      usernameMin: string,
      usernameMax: string,
      usernameDesc: string,
      firstNameDesc: string,
      lastNameDesc: string,
      email: string,
      emailDesc: string,
      dob: string,
      updateProfile: string
    }
  },
  auth: {
    signin: {
      signinMethod: string;
      continueWith: string;
      noAccount: string;
      action: string;
      resetPassword: {
        entreEmail: string;
        description: string
        successToast: {
          message: string
          description: string
          successMessage: string
        },
        continue: string
        continueSROnly: string
        action: string
      }
    },
    signup: {
      signupMethod: string;
      continueWith: string;
      haveAccount: string;

      action: string;
      continue: string;
      continueSROnly: string;
      successToast: {
        message: string
        description: string
      },
      verifyEmail: {
        description: string
        verificationCode: string,
        action: string
      }
    },
    oauthSignin: {
      signinWith: string
      facebook: string
      google: string
      discord: string
      successToast: {
        message: string
      }
    },
    logout: {
      logout: string
      goBack: string
    }
  },
  formLabels: {
    email: string;
    password: string;
    confirmPassword: string;
  },
  cardLabels: {
    orderGenerated: string;
    orderShipped: string;
    orderCreated: string;
    picklistGenerated: string;
    assigingToPickers: string;
    packed: string;
    dispachedToLM: string;
    totalSellers: string,
    totalShipments: string,
    totalItems: string,
    totalRTF: string,
    totalItemsInInventory: string,
  }
  dateRangePicker: {
    placeholder: string;
  },
  footer: {
    allRightsReserved: string
  },
  picker: {
    pickers: string
    selectPicker: string
  }
  toast: {
    orderCreated: string
    orderGenerated: string
    pickListGenerated: string
    orderDeleted: string
    pickListDeleted: string
  }
}




export const pickListSchema = z.object({
  id: z.string(),
  pickupId: z.string(),
  status: z.string(),
  label: z.string(),
  warehouse: z.string(),
  date: z.date(),
  priority: z.string(),
  packed: z.boolean(),
  pickedUp: z.boolean(),
})

export type PickList = z.infer<typeof pickListSchema>

export const orderCreatedSchema = z.object({
  id: z.string(),
  orderType: z.string(),
  awb: z.string(),
  company: z.string(),
  origin: z.string(),
  seller: z.string(),
  destination: z.string(),
  receiver: z.string(),
  receiverAdress: z.string(),
  receiverMobile: z.string(),
  payementMode: z.string(),
})

export const packedOrderesSchema = z.object({
  id: z.string(),
  orderType: z.string(),
  awb: z.string(),
  company: z.string(),
  origin: z.string(),
  seller: z.string(),
  destination: z.string(),
  // packed: z.boolean(),
  // pickedUp: z.boolean(),
  warehouse: z.string(),
  // pickupId: z.string(),
  receiver: z.string(),
  receiverAdress: z.string(),
})

export type PackedOrders = z.infer<typeof packedOrderesSchema>


export type OrderCreated = z.infer<typeof orderCreatedSchema>


export const orderGeneratedSchema = z.object({
  id: z.string(),
  orderType: z.string(),
  awb: z.string(),
  company: z.string(),
  origin: z.string(),
  seller: z.string(),
  destination: z.string(),
  receiver: z.string(),
  receiverAdress: z.string(),
  receiverMobile: z.string(),
  payementMode: z.string(),
})

export type OrderGenerated = z.infer<typeof orderGeneratedSchema>

