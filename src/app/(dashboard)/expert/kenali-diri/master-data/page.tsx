import DataTabsMasterData from '@/app/(dashboard)/components/master-data/DataTabsMasterData'
import MasterDataHead from '@/app/(dashboard)/components/master-data/MasterDataHead'
import React from 'react'

export default function MasterData() {
  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <MasterDataHead />
        <DataTabsMasterData />
      </div>
    </div>
  )
}
