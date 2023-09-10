"use client"
import { Locale } from '@/i18n.config';
import { cn } from '@/lib/utils';
import { DictionaryEntry } from '@/types';
import 'chart.js/auto';
import { ChartOptions } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const SHIPPEMENT_CHART_DATA = [
  {
    label: "Total Sellers",
    key: "totalSellers",
    value: "72",
    color: "#08737f",
    hoverColor: "#215d6e",
    className: "bg-[#08737f]"
  }, {
    label: "Total Shipments",
    key: "totalShipments",
    value: "625",
    color: "#f82359",
    hoverColor: "#f93e6e",
    className: "bg-[#f82359]"
  }, {
    label: "Total Items",
    key: "totalItems",
    value: "265",
    color: "#3eeeff",
    hoverColor: "#6ef2ff",
    className: "bg-[#3eeeff]"
  }, {
    label: "Total RTF",
    key: "totalRTF",
    value: "0",
    color: "#8f57e1",
    hoverColor: "#ab81e8",
    className: "bg-[#8f57e1]"
  }, {
    label: "Total Items in Inventory",
    key: "totalItemsInInventory",
    value: "999",
    color: "#bce966",
    hoverColor: "#cbed88",
    className: "bg-[#bce966]"
  }
]


const data = {
  labels: [
    SHIPPEMENT_CHART_DATA[0].label,
    SHIPPEMENT_CHART_DATA[1].label,
    SHIPPEMENT_CHART_DATA[2].label,
    SHIPPEMENT_CHART_DATA[3].label,
    SHIPPEMENT_CHART_DATA[4].label,
  ],
  datasets: [{
    data: [
      SHIPPEMENT_CHART_DATA[0].value,
      SHIPPEMENT_CHART_DATA[1].value,
      SHIPPEMENT_CHART_DATA[2].value,
      SHIPPEMENT_CHART_DATA[3].value,
      SHIPPEMENT_CHART_DATA[4].value,
    ],
    backgroundColor: [
      SHIPPEMENT_CHART_DATA[0].color,
      SHIPPEMENT_CHART_DATA[1].color,
      SHIPPEMENT_CHART_DATA[2].color,
      SHIPPEMENT_CHART_DATA[3].color,
      SHIPPEMENT_CHART_DATA[4].color,
    ],
    hoverBackgroundColor: [
      SHIPPEMENT_CHART_DATA[0].hoverColor,
      SHIPPEMENT_CHART_DATA[1].hoverColor,
      SHIPPEMENT_CHART_DATA[2].hoverColor,
      SHIPPEMENT_CHART_DATA[3].hoverColor,
      SHIPPEMENT_CHART_DATA[4].hoverColor,
    ]
  }]
};

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  }
}

const ShippementAnalytics = ({
  lang,
  dict
}: {
  dict: DictionaryEntry,
  lang: Locale
}) => {

  return (
    <div className={cn('flex flex-col items-center w-full space-x-5 space-y-5  md:flex-row md:justify-center', {
      "md:flex-row-reverse": lang === "ar"
    })}>
      <div className={cn('flex flex-col', {
        "items-end": lang === "ar"
      })}>
        {
          SHIPPEMENT_CHART_DATA.map((item, index) => (
            <div key={index} className={cn("inline-flex items-center ", {
              "flex-row-reverse ml-3": lang === "ar"
            })}>
              <span className={
                cn("inline-block w-2 h-2 mr-2 rounded-full ", item.className, {
                  "ml-2 mr-0": lang === "ar"
                })
              }></span>
              <span className={cn("font-semibold text-muted-foreground", {
                "text-right": lang === "ar"
              })}>{dict.cardLabels[item.key as keyof typeof dict.cardLabels]}</span>
            </div>
          ))
        }
      </div>
      <div className='h-80'>
        <Pie
          data={data}
          className='w-full h-full'
          options={options}
        />
      </div>
    </div>
  )
}
export default ShippementAnalytics