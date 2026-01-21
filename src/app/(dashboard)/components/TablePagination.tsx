// components/table/TablePagination.tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import Typography from '@/components/Typography'

export const TablePagination = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 mt-4">
      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        <Button variant="outline" size="icon" className="h-8 w-8 text-gray-500">
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 text-gray-500">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Active Page */}
        <Button size="icon" className="h-8 w-8 bg-blue-600 hover:bg-blue-700">
          <Typography variant="l2" className="text-white">
            1
          </Typography>
        </Button>
        {/* Inactive Pages */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Typography variant="l2" className="text-gray-600">
            2
          </Typography>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Typography variant="l2" className="text-gray-600">
            3
          </Typography>
        </Button>

        <span className="px-2 text-gray-400">...</span>

        <Button variant="outline" size="icon" className="h-8 w-8 text-gray-600">
          <Typography variant="l2">100</Typography>
        </Button>

        <Button variant="outline" size="icon" className="h-8 w-8 text-gray-500">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 text-gray-500">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Rows Per Page */}
      <div className="flex items-center gap-3">
        <Typography variant="l1" className="text-gray-600">
          Halaman
        </Typography>
        <Select defaultValue="10">
          <SelectTrigger className="w-[70px] h-9 border border-gray-200">
            <Typography variant="l1">
              <SelectValue placeholder="10" />
            </Typography>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <Typography variant="l1" className="text-gray-600">
          dari 120
        </Typography>
      </div>
    </div>
  )
}
