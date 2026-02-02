import DataTabs from '@/app/(dashboard)/components/DataTabs'
import { MahasiswaTestTable } from '@/app/(dashboard)/components/TestTable'
import UmpanBalikFilterTabs from '@/app/(dashboard)/components/UmpanBalikFilterTabs'
import React from 'react'

export default function UmpanBalik() {
  // Mock Data based on the image
  const TABLE_DATA: MahasiswaTestTable[] = Array(60)
    .fill(null)
    .map((_, i) => ({
      id: '#KD-001',
      name: 'Natasya Juliana',
      category: 'Tes Profil Karir',
      status: i % 3 === 0 ? 'Selesai' : i % 3 === 1 ? 'Berjalan' : 'Dihentikan',
      result: i % 2 === 0 ? 'SEC' : 'RIA',
    }))
  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <UmpanBalikFilterTabs />
        <DataTabs isExpert={false} mahasiswaData={TABLE_DATA} />
        {/* <FilterBar /> */}
      </div>
    </div>
  )
}
