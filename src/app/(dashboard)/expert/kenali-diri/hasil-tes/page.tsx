'use client'

import React from 'react'
import { TestStatus } from '@/app/(dashboard)/components/TestTable'
import FilterTabs from '@/app/(dashboard)/components/FilterTabs'
import DetailedSearchInfo, {
  Filters,
} from '@/app/(dashboard)/components/DetailedSearchInfo'
import { useKenaliDiriHistory } from './hooks/mutation'
import { ExpertFeedbackItem, KenaliDiriHistoryItem } from '@/types/kenali-diri'
import TestExpertDataTable from '@/app/(dashboard)/components/TestExpertTable'
// export const DUMMY_TEST_DATA: MahasiswaTestTable[] = [
//   {
//     id: '#KD-001',
//     name: 'Natasya Juliana',
//     category: 'Tes Profil Karir',
//     status: 'Selesai',
//     result: 'SEC',
//   },
//   {
//     id: '#KD-002',
//     name: 'Rizky Ramadhan',
//     category: 'Tes Minat Bakat',
//     status: 'Berjalan',
//     result: 'RIA',
//   },
//   {
//     id: '#KD-003',
//     name: 'Alya Putri Mahesa',
//     category: 'Tes Profil Karir',
//     status: 'Dihentikan',
//     result: 'SEC',
//   },
//   {
//     id: '#KD-004',
//     name: 'Fajar Pratama',
//     category: 'Tes Kepribadian',
//     status: 'Selesai',
//     result: 'RIA',
//   },
//   {
//     id: '#KD-005',
//     name: 'Siti Nurhaliza',
//     category: 'Tes Minat Bakat',
//     status: 'Berjalan',
//     result: 'SEC',
//   },
//   {
//     id: '#KD-006',
//     name: 'Muhammad Iqbal',
//     category: 'Tes Profil Karir',
//     status: 'Selesai',
//     result: 'RIA',
//   },
//   {
//     id: '#KD-007',
//     name: 'Dinda Ayu Lestari',
//     category: 'Tes Kepribadian',
//     status: 'Dihentikan',
//     result: 'SEC',
//   },
//   {
//     id: '#KD-008',
//     name: 'Andi Saputra',
//     category: 'Tes Minat Bakat',
//     status: 'Selesai',
//     result: 'RIA',
//   },
//   {
//     id: '#KD-009',
//     name: 'Kevin Jonathan',
//     category: 'Tes Profil Karir',
//     status: 'Berjalan',
//     result: 'SEC',
//   },
//   {
//     id: '#KD-010',
//     name: 'Putri Anindya',
//     category: 'Tes Kepribadian',
//     status: 'Selesai',
//     result: 'RIA',
//   },
// ]
/* =======================================================
   EXTEND FILTERS FOR THIS PAGE
======================================================= */

type PageFilters = Filters & {
  tab: 'Semua Data' | 'Selesai' | 'Berjalan' | 'Dihentikan'
  search?: string
}

/* =======================================================
   MAP BACKEND STATUS TO TABLE STATUS
======================================================= */

const mapStatus = (
  status: 'completed' | 'in_progress' | 'abandoned',
): TestStatus => {
  switch (status) {
    case 'completed':
      return 'Selesai'
    case 'in_progress':
      return 'Berjalan'
    case 'abandoned':
      return 'Dihentikan'
    default:
      return 'Berjalan'
  }
}

/* =======================================================
   PAGE COMPONENT
======================================================= */

export default function HasilTes() {
  const { data, isLoading } = useKenaliDiriHistory({
    page: 1,
    per_page: 1000,
  })

  const [filters, setFilters] = React.useState<PageFilters>({
    tab: 'Semua Data',
    search: '',
    startDate: undefined,
    endDate: undefined,
    category: undefined,
    result: undefined,
    sort: undefined,
  })

  const [isFilterOpen, setIsFilterOpen] = React.useState(false)

  const filteredData = React.useMemo(() => {
    const rawData: KenaliDiriHistoryItem[] = data?.data?.data ?? []

    let result = [...rawData]

    /* TAB FILTER */
    if (filters.tab !== 'Semua Data') {
      result = result.filter((item) => mapStatus(item?.status) === filters.tab)
    }

    /* SEARCH FILTER */
    if (filters.search?.trim()) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter((item) => {
        const userName = String(item?.user_name ?? '').toLowerCase()
        const testId = String(item?.test_id ?? '').toLowerCase()
        return userName.includes(searchLower) || testId.includes(searchLower)
      })
    }

    /* CATEGORY FILTER */
    if (filters.category && filters.category !== 'all') {
      const targetMap: Record<string, string> = {
        career: 'Profil Karir',
        minat_bakat: 'Minat Bakat',
        kepribadian: 'Kepribadian',
      }
      const target = (
        targetMap[filters.category] || filters.category
      ).toLowerCase()
      result = result.filter((item) =>
        String(item?.category_name ?? '')
          .toLowerCase()
          .includes(target),
      )
    }

    /* RESULT FILTER */
    if (filters.result && filters.result !== 'all') {
      const targetResult = filters.result.toLowerCase()
      result = result.filter(
        (item) =>
          String(item?.result_code ?? '').toLowerCase() === targetResult,
      )
    }

    /* SORTING */
    if (filters.sort === 'az') {
      result.sort((a, b) =>
        String(a?.user_name ?? '').localeCompare(String(b?.user_name ?? '')),
      )
    } else if (filters.sort === 'za') {
      result.sort((a, b) =>
        String(b?.user_name ?? '').localeCompare(String(a?.user_name ?? '')),
      )
    } else if (filters.sort === 'newest') {
      result.sort(
        (a, b) =>
          new Date(b?.started_at ?? 0).getTime() -
          new Date(a?.started_at ?? 0).getTime(),
      )
    }

    /* FINAL MAPPING: KenaliDiriHistoryItem -> ExpertFeedbackItem */
    return result.map((item): ExpertFeedbackItem => {
      // Safe numeric conversion for ID
      const testIdStr = String(item?.test_id ?? '')
      const numericId = parseInt(testIdStr.replace(/\D/g, ''), 10) || 0

      return {
        id: numericId,
        expert: {
          name: item?.user_name ?? 'Unknown',
          profession: 'Student', // Fallback value
          profession_id: 0,
        },
        top5_status: item?.status ?? '',
        top5_status_label: mapStatus(item?.status),
        scores: {
          accuracy: 0, // Fallback since history doesn't have feedback scores
          logic: 0,
          usefulness: 0,
        },
        obstacles: [],
        has_suggestion: false,
        submitted_at: item?.completed_at || item?.started_at || '',
        test_category: item?.category_name ?? '',
        test_category_label: item?.category_name ?? '',
      }
    })
  }, [data, filters])

  if (isLoading) return <div>Loading...</div>

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto space-y-6 p-6">
        <FilterTabs
          activeTab={filters.tab}
          search={filters.search ?? ''}
          onTabChange={(tab) => setFilters((prev) => ({ ...prev, tab }))}
          onSearchChange={(value) =>
            setFilters((prev) => ({ ...prev, search: value }))
          }
          onFilterClick={() => setIsFilterOpen((prev) => !prev)}
        />

        {isFilterOpen && (
          <DetailedSearchInfo
            filters={filters}
            onChange={(field, value) =>
              setFilters((prev) => ({ ...prev, [field]: value }))
            }
          />
        )}

        <TestExpertDataTable tableData={filteredData} />
      </div>
    </div>
  )
}
