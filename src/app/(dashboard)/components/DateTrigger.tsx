// components/search/DateTrigger.tsx
import React from 'react'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Typography from '@/components/Typography'

interface DateTriggerProps {
  placeholder: string
  value?: Date
  onClick?: () => void
}

export const DateTrigger: React.FC<DateTriggerProps> = ({
  placeholder,
  value,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'bg-white shadow-none border-1 w-full justify-start text-left font-normal h-auto hover:bg-gray-200/25 rounded-xl border-gray-200',
        !value && 'text-muted-foreground',
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
      <Typography variant="l1" className="text-gray-600">
        {value ? value.toLocaleDateString() : placeholder}
      </Typography>
    </Button>
  )
}
