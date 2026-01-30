'use client'
import DetailedSearchInfo from '@/app/(dashboard)/components/DetailedSearchInfo'
import { FilterActions } from '@/app/(dashboard)/components/FilterActions'
import FilterTabs from '@/app/(dashboard)/components/FilterTabs'
import TestTable from '@/app/(dashboard)/components/TestTable'
import React from 'react'

export default function HasilTes() {
  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <FilterTabs />
        {/* <FilterBar /> */}
        <DetailedSearchInfo />
        <div className="w-full">
          <FilterActions />
        </div>
        <TestTable />
      </div>
    </div>
  )
}
