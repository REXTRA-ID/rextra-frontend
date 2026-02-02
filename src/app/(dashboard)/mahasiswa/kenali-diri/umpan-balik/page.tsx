import DataTabs from '@/app/(dashboard)/components/DataTabs'
import UmpanBalikFilterTabs from '@/app/(dashboard)/components/UmpanBalikFilterTabs'
import React from 'react'

export default function UmpanBalik() {
  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <UmpanBalikFilterTabs />
        <DataTabs />
        {/* <FilterBar /> */}
      </div>
    </div>
  )
}
