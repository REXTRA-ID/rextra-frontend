// components/search/DetailedSearchInfo.tsx
import React from 'react'
import { SearchSection } from './SearchSection'
import { DateTrigger } from './DateTrigger'
import { SelectFilter } from './SelectFilter'
import { FilterActions } from './FilterActions'
import Typography from '@/components/Typography'

export default function DetailedSearchInfo() {
  return (
    // 1. Main Container: Fixed to 'flex-col' to stack Inputs (Top) and Actions (Bottom)

    <>
      <div className="w-full hidden xl:block bg-white border border-gray-200 rounded-2xl flex flex-col xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr]  items-start xl:items-center justify-between gap-6">
        {/* 2. Top Section: Inputs (Row on Desktop, Col on Mobile) */}
        <Typography
          variant="h6"
          weight="medium"
          className="text-gray-900 xl:hidden block"
        >
          Kontrol dan Pencarian Data
        </Typography>
        {/* <div className="w-full flex flex-col xl:grid xl:grid-cols-[1fr_3fr_3fr_3fr]  items-start xl:items-center justify-between gap-6"> */}
        <div className="p-6 border-b xl:border-b-0 xl:border-r border-gray-200">
          <SearchSection label="Rentang Tanggal" className="w-full">
            <div className="flex flex-row w-full gap-3">
              <div className="flex-1">
                <DateTrigger placeholder="Mulai" />
              </div>
              <div className="flex-1">
                <DateTrigger placeholder="Selesai" />
              </div>
            </div>
          </SearchSection>
        </div>

        {/* Section 2: Kategori Tes */}
        <div className="p-6 border-b xl:border-b-0 xl:border-r border-gray-200">
          <SearchSection label="Kategori Tes" className="w-full xl:flex-1">
            <SelectFilter
              placeholder="Kategori Tes"
              options={[
                { label: 'Tes Profil Karir', value: 'career' },
                { label: 'Tes IQ', value: 'iq' },
              ]}
            />
          </SearchSection>
        </div>

        {/* Section 3: Hasil Tes */}
        <div className="p-6 border-b xl:border-b-0 xl:border-r border-gray-200">
          <SearchSection label="Hasil Tes" className="w-full xl:flex-1">
            <SelectFilter
              placeholder="Hasil Tes"
              options={[
                { label: 'Semua Hasil', value: 'all' },
                { label: 'Lulus', value: 'passed' },
                { label: 'Gagal', value: 'failed' },
              ]}
            />
          </SearchSection>
        </div>

        {/* Section 4: Urutkan Berdasarkan */}
        <div className="p-6 border-b xl:border-b-0 xl:border-r border-gray-200">
          <SearchSection
            label="Urutkan Berdasarkan"
            className="w-full xl:flex-1"
          >
            <SelectFilter
              placeholder="Urutkan Data Berdasarkan"
              options={[
                { label: 'Nama A-Z', value: 'az' },
                { label: 'Nama Z-A', value: 'za' },
                { label: 'Terbaru', value: 'newest' },
              ]}
            />
          </SearchSection>
        </div>

        {/* </div> */}
      </div>

      <div className="w-full p-6 bg-white border border-gray-200 rounded-2xl flex flex-col items-start xl:items-center justify-between gap-6 xl:hidden block">
        {/* 2. Top Section: Inputs (Row on Desktop, Col on Mobile) */}
        <Typography
          variant="h6"
          weight="medium"
          className="text-gray-900 xl:hidden block"
        >
          Kontrol dan Pencarian Data
        </Typography>
        {/* <div className="w-full flex flex-col xl:grid xl:grid-cols-[1fr_3fr_3fr_3fr]  items-start xl:items-center justify-between gap-6"> */}
        <SearchSection label="Rentang Tanggal" className="w-full">
          <div className="flex flex-col w-full gap-3">
            <DateTrigger placeholder="Mulai" />
            <DateTrigger placeholder="Selesai" />
          </div>
        </SearchSection>

        {/* Section 2: Kategori Tes */}
        <SearchSection label="Kategori Tes" className="w-full xl:flex-1">
          <SelectFilter
            placeholder="Kategori Tes"
            options={[
              { label: 'Tes Profil Karir', value: 'career' },
              { label: 'Tes IQ', value: 'iq' },
            ]}
          />
        </SearchSection>

        {/* Section 3: Hasil Tes */}
        <SearchSection label="Hasil Tes" className="w-full xl:flex-1">
          <SelectFilter
            placeholder="Hasil Tes"
            options={[
              { label: 'Semua Hasil', value: 'all' },
              { label: 'Lulus', value: 'passed' },
              { label: 'Gagal', value: 'failed' },
            ]}
          />
        </SearchSection>

        {/* Section 4: Urutkan Berdasarkan */}
        <SearchSection label="Urutkan Berdasarkan" className="w-full xl:flex-1">
          <SelectFilter
            placeholder="Urutkan Data Berdasarkan"
            options={[
              { label: 'Nama A-Z', value: 'az' },
              { label: 'Nama Z-A', value: 'za' },
              { label: 'Terbaru', value: 'newest' },
            ]}
          />
        </SearchSection>

        {/* </div> */}
      </div>
    </>
  )
}
