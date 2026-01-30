'use client'
import React from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Typography from '@/components/Typography'

interface SearchBarProps {
  onSearch?: (value: string) => void
  onFilterClick?: () => void
  className?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilterClick,
  className,
}) => {
  return (
    <div className={`flex w-full xl:w-full items-center gap-4  ${className}`}>
      {/* Search Input Field */}
      <div className="flex-1 flex items-center gap-x-3 px-4 h-[40px] rounded-lg border border-gray-300 bg-white transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Search className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Ketikkan nama pengguna"
          className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-500 font-Poppins text-[16px]"
          // Note: Standard <input> cannot accept custom React Components as children.
          // I applied 'font-Poppins text-[16px]' manually to match your Typography 'bt' variant.
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  )
}
