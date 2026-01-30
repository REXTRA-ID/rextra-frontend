import Typography from '@/components/Typography'
import { ChevronDown, Lightbulb } from 'lucide-react'
import React from 'react'

interface ChartLayoutProps {
  children: React.ReactNode
  title: string
  periode: string
  description: string
  className?: string
  isShowDetailSelengkapnyaButton?: boolean
  detailSelengkapnya?: string
}

const ChartLayout = ({
  title,
  periode,
  description,
  children,
  className = '',
  isShowDetailSelengkapnyaButton = false,
  detailSelengkapnya = '',
}: ChartLayoutProps) => {
  return (
    <div
      className={`flex flex-col p-6 border-[1px] border-[#B5B7B8] rounded-xl h-full ${className}`}
    >
      <div className="flex flex-row mb-12">
        <div className="w-[3px] h-full rounded-lg bg-[#0046CC] mr-4" />
        <div className="flex flex-col">
          <Typography
            variant="h6"
            weight="semibold"
            font="Poppins"
            className="text-[#0046CC] my-auto"
          >
            {title}
          </Typography>
          <Typography
            variant="l1"
            weight="regular"
            font="Poppins"
            className="text-[#464B4D] my-auto"
          >
            {periode}
          </Typography>
        </div>
      </div>

      {children}
      <div className="border-1 border-[#FF7409] bg-[#FFF1E3] rounded-lg flex flex-row p-6 mt-12 gap-x-3">
        <div className="bg-[#FFDEBB] p-1 rounded-lg w-fit h-fit">
          <Lightbulb className="text-[#FF7409] p-1" />
        </div>
        <div className="flex flex-col ">
          <Typography
            variant="l1"
            weight="regular"
            font="Poppins"
            className="text-[#212729] my-auto"
          >
            {description}
          </Typography>
          {isShowDetailSelengkapnyaButton && (
            <div className="flex flex-row gap-x-1">
              <Typography
                variant="l2"
                weight="regular"
                font="Poppins"
                className="text-[#FF7409] my-auto"
              >
                Lihat detail selengkapnya
              </Typography>
              <ChevronDown className="text-[#FF7409]" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChartLayout
