import DataTabs from '@/app/(dashboard)/components/DataTabs'
import { TestResult } from '@/app/(dashboard)/components/TestExpertTable'
import UmpanBalikFilterTabs from '@/app/(dashboard)/components/UmpanBalikFilterTabs'
import React from 'react'

export default function UmpanBalik() {
  const TEST_RESULT_DATA: TestResult[] = Array(10)
    .fill(null)
    .map((_, i) => ({
      idTest: `#KD-${String(i + 1).padStart(3, '0')}`,
      pengguna: [
        'Natasya Juliana',
        'Rizky Mahendra',
        'Aulia Putri',
        'Dimas Pratama',
        'Salsa Anindya',
      ][i % 5],
      profesi: ['Mahasiswa', 'Fresh Graduate', 'Karyawan', 'Wirausaha'][i % 4],

      /** Top 5 ranking (null = Tidak Muncul) */
      top5:
        i % 4 === 0 ? 'P1' : i % 4 === 1 ? 'P2' : i % 4 === 2 ? 'P3-5' : null,

      /** Score 0–7 */
      akurasi: i % 8,
      logika: (i + 2) % 8,
      manfaat: (i + 4) % 8,

      /** Kendala */
      kendala:
        i % 3 === 0
          ? 'Tidak ada kendala'
          : i % 3 === 1
            ? ['Pertanyaan kurang jelas', 'Waktu pengerjaan terbatas']
            : ['Beberapa istilah sulit dipahami'],
    }))

  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <UmpanBalikFilterTabs />
        <DataTabs isExpert={true} expertData={TEST_RESULT_DATA} />
        {/* <FilterBar /> */}
      </div>
    </div>
  )
}
