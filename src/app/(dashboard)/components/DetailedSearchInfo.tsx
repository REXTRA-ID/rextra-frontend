// components/search/DetailedSearchInfo.tsx
import React from 'react'
import { SearchSection } from './SearchSection'
import { DateTrigger } from './DateTrigger'
import { SelectFilter } from './SelectFilter'
import { FilterActions } from './FilterActions'

export default function DetailedSearchInfo() {
  return (
    // 1. Main Container: Fixed to 'flex-col' to stack Inputs (Top) and Actions (Bottom)
    <div className="w-full  bg-white border border-gray-200 rounded-2xl p-6  flex flex-col gap-6">
      {/* 2. Top Section: Inputs (Row on Desktop, Col on Mobile) */}
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Section 1: Rentang Tanggal (Date Range) */}
        {/* Added lg:flex-[2] back so it takes more space */}
        <SearchSection label="Rentang Tanggal" className="w-full lg:flex-[2]">
          <div className="flex flex-row w-full items-center gap-3">
            <DateTrigger placeholder="Mulai" />
            <DateTrigger placeholder="Selesai" />
          </div>
        </SearchSection>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-200" />

        {/* Section 2: Kategori Tes */}
        <SearchSection label="Kategori Tes" className="w-full lg:flex-1">
          <SelectFilter
            placeholder="Tes Profil Karir"
            options={[
              { label: 'Tes Profil Karir', value: 'career' },
              { label: 'Tes IQ', value: 'iq' },
            ]}
          />
        </SearchSection>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-200" />

        {/* Section 3: Hasil Tes */}
        <SearchSection label="Hasil Tes" className="w-full lg:flex-1">
          <SelectFilter
            placeholder="Semua Hasil"
            options={[
              { label: 'Semua Hasil', value: 'all' },
              { label: 'Lulus', value: 'passed' },
              { label: 'Gagal', value: 'failed' },
            ]}
          />
        </SearchSection>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-200" />

        {/* Section 4: Urutkan Berdasarkan */}
        <SearchSection label="Urutkan Berdasarkan" className="w-full lg:flex-1">
          <SelectFilter
            placeholder="Nama A-Z"
            options={[
              { label: 'Nama A-Z', value: 'az' },
              { label: 'Nama Z-A', value: 'za' },
              { label: 'Terbaru', value: 'newest' },
            ]}
          />
        </SearchSection>
      </div>

      {/* 3. Bottom Section: Actions */}
      <div className="w-full pt-2">
        <FilterActions />
      </div>
    </div>
  )
}
