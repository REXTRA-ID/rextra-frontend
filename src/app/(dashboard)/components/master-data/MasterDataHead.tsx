'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import React from 'react'
import { SearchBar } from '../Searchbar'

type Props = {
  search: string
  onSearchChange: (value: string) => void
}

const MasterDataHead = ({ search, onSearchChange }: Props) => {
  return (
    <div className="flex flex-row gap-4 w-full">
      {/* TITLE */}
      <div className="flex flex-col gap-1 w-3/4">
        <Typography variant="h5" weight="bold" font="Poppins">
          Master Data Profil Kode RIASEC
        </Typography>
        <Typography variant="l1" className="text-gray-500" font="Poppins">
          Menyajikan 156 profil kode RIASEC yang terdiri dari kombinasi 1 hingga
          3 huruf.
        </Typography>
      </div>

      {/* SEARCH AREA */}
      <div className="flex flex-row gap-x-3 items-center w-full">
        <SearchBar value={search} onSearch={onSearchChange} />

        <Button className="bg-[#3379FF] hover:bg-[#3379FF]/70 hover:cursor-pointer">
          <Typography variant="l1" weight="medium" className="text-white">
            Cari
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default MasterDataHead
