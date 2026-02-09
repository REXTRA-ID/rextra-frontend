import DetailedSearchInfo from '@/app/(dashboard)/components/DetailedSearchInfo'
import { FilterActions } from '@/app/(dashboard)/components/FilterActions'
import FilterTabs from '@/app/(dashboard)/components/FilterTabs'
import TestTable, {
  MahasiswaTestTable,
} from '@/app/(dashboard)/components/TestTable'
import React from 'react'

export const DUMMY_TEST_DATA: MahasiswaTestTable[] = [
  {
    id: '#KD-001',
    name: 'Natasya Juliana',
    category: 'Tes Profil Karir',
    status: 'Selesai',
    result: 'SEC',
  },
  {
    id: '#KD-002',
    name: 'Rizky Ramadhan',
    category: 'Tes Minat Bakat',
    status: 'Berjalan',
    result: 'RIA',
  },
  {
    id: '#KD-003',
    name: 'Alya Putri Mahesa',
    category: 'Tes Profil Karir',
    status: 'Dihentikan',
    result: 'SEC',
  },
  {
    id: '#KD-004',
    name: 'Fajar Pratama',
    category: 'Tes Kepribadian',
    status: 'Selesai',
    result: 'RIA',
  },
  {
    id: '#KD-005',
    name: 'Siti Nurhaliza',
    category: 'Tes Minat Bakat',
    status: 'Berjalan',
    result: 'SEC',
  },
  {
    id: '#KD-006',
    name: 'Muhammad Iqbal',
    category: 'Tes Profil Karir',
    status: 'Selesai',
    result: 'RIA',
  },
  {
    id: '#KD-007',
    name: 'Dinda Ayu Lestari',
    category: 'Tes Kepribadian',
    status: 'Dihentikan',
    result: 'SEC',
  },
  {
    id: '#KD-008',
    name: 'Andi Saputra',
    category: 'Tes Minat Bakat',
    status: 'Selesai',
    result: 'RIA',
  },
  {
    id: '#KD-009',
    name: 'Kevin Jonathan',
    category: 'Tes Profil Karir',
    status: 'Berjalan',
    result: 'SEC',
  },
  {
    id: '#KD-010',
    name: 'Putri Anindya',
    category: 'Tes Kepribadian',
    status: 'Selesai',
    result: 'RIA',
  },
]

export default function HasilTes() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <FilterTabs />
        {/* <FilterBar /> */}
        <DetailedSearchInfo />

        <TestTable tableData={DUMMY_TEST_DATA} />
      </div>
    </div>
  )
}
