import DataTabs from '@/app/(dashboard)/components/DataTabs'
import UmpanBalikFilterTabs from '@/app/(dashboard)/components/UmpanBalikFilterTabs'
import { StudentFeedbackItem } from '@/types/kenali-diri'
import React from 'react'
import { getStudentFeedbacks } from './hooks/mutation'

export default async function UmpanBalik() {
  // Mock Data based on the image
  // const TABLE_DATA: MahasiswaTestTable[] = Array(60)
  //   .fill(null)
  //   .map((_, i) => ({
  //     id: '#KD-001',
  //     name: 'Natasya Juliana',
  //     category: 'Tes Profil Karir',
  //     status: i % 3 === 0 ? 'Selesai' : i % 3 === 1 ? 'Berjalan' : 'Dihentikan',
  //     result: i % 2 === 0 ? 'SEC' : 'RIA',
  //   }))

  let studentData: StudentFeedbackItem[] = []

  try {
    const response = await getStudentFeedbacks({ page: 1, page_size: 25 })
    if (response.success) {
      studentData = response.data.items
    }
  } catch (error) {
    console.error('[UmpanBalik] Failed to fetch expert feedbacks:', error)
  }

  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <UmpanBalikFilterTabs />
        <DataTabs isExpert={false} mahasiswaData={studentData} />
        {/* <FilterBar /> */}
      </div>
    </div>
  )
}
