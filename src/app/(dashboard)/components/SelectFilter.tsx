// components/search/SelectFilter.tsx
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Typography from '@/components/Typography'

interface SelectFilterProps {
  placeholder: string
  options: { label: string; value: string }[]
}

export const SelectFilter: React.FC<SelectFilterProps> = ({
  placeholder,
  options,
}) => {
  return (
    <Select>
      <SelectTrigger className="w-full h-[46px] rounded-xl border-gray-200">
        {/* We use a span here to wrap the SelectValue to apply Typography styles if needed, 
            but usually SelectValue renders simple text. 
            Let's force the style via class on the Trigger or a custom value component. */}
        <Typography variant="l1" className="text-gray-600 truncate">
          <SelectValue placeholder={placeholder} />
        </Typography>
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <Typography variant="l1">{option.label}</Typography>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
