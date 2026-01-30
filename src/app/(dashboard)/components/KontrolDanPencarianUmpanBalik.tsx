// components/search/DetailedSearchInfo.tsx
import React from 'react'
import { SearchSection } from './SearchSection'
import { DateTrigger } from './DateTrigger'
import { SelectFilter } from './SelectFilter'
import { FilterActions } from './FilterActions'
import Typography from '@/components/Typography'
import { SearchBar } from './Searchbar'

export default function KontrolPencarianUmpanBalik() {
  return (
    // 1. Main Container: Fixed to 'flex-col' to stack Inputs (Top) and Actions (Bottom)
    <div className="w-full  bg-white border border-gray-200 rounded-2xl p-6  flex flex-col gap-6 mb-12">
      {/* 2. Top Section: Inputs (Row on Desktop, Col on Mobile) */}
      <Typography
        variant="h6"
        weight="medium"
        className="text-gray-900 xL:hidden block"
      >
        Kontrol dan Pencarian Data
      </Typography>
      <div className="w-full flex flex-col xl:grid xl:grid-cols-[1fr_2fr_1fr_1fr] items-start xl:items-center justify-between gap-6">
        {/* Section 2: Kategori Tes */}
        <SelectFilter
          placeholder="Feedback Terbaru"
          options={[
            { label: 'Tes Profil Karir', value: 'career' },
            { label: 'Tes IQ', value: 'iq' },
          ]}
        />
        <SearchBar />

        <SelectFilter
          placeholder="Feedback Terbaru"
          options={[
            { label: 'Tes Profil Karir', value: 'career' },
            { label: 'Tes IQ', value: 'iq' },
          ]}
        />
        <SelectFilter
          placeholder="Semua"
          options={[
            { label: 'Tes Profil Karir', value: 'career' },
            { label: 'Tes IQ', value: 'iq' },
          ]}
        />
      </div>
    </div>
  )
}
