'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SearchBar } from '../Searchbar'

const tabs = [
  {
    label: 'Mahasiswa',
    key: 'mahasiswa',
    path: '/mahasiswa/kenali-diri/umpan-balik',
  },
  {
    label: 'Expert',
    key: 'expert',
    path: '/expert/kenali-diri/umpan-balik',
  },
]

const UmpanBalikFilterTabs = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex flex-row gap-4 w-full">
      {/* TITLE */}
      <div className="flex flex-col gap-1 w-3/4">
        <Typography variant="h5" weight="bold" font="Poppins">
          Master Data Profil Kode RIASEC{' '}
        </Typography>
        <Typography variant="l1" className="text-gray-500" font="Poppins">
          Menyajikan 156 profil kode RIASEC yang terdiri dari kombinasi 1 hingga
          3 huruf.{' '}
        </Typography>
      </div>
      <div className="flex flex-row gap-x-3 items-center w-full">
        <SearchBar />
        <Button>
          <Typography variant="l1" weight="medium" className="text-gray-900">
            Cari
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default UmpanBalikFilterTabs
