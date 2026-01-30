import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import React from 'react'
import { SearchBar } from './Searchbar'

const tabs = ['Mahasiswa', 'Expert']

const UmpanBalikFilterTabs = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* TITLE */}
      <div className="flex flex-col gap-1">
        <Typography variant="h5" weight="bold" font="Poppins">
          Umpan Balik Fitur Kenali Diri
        </Typography>
        <Typography variant="l1" className="text-gray-500" font="Poppins">
          Menyajikan data respon umpan balik pengguna fitur Kenali Diri{' '}
        </Typography>
      </div>

      {/* FILTER + SEARCH */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-4 w-full">
        {/* TABS */}
        <div
          className="
            flex gap-2
            w-fit
            bg-[#D3D4D4]/15
            outline outline-1 outline-[#B5B7B8]
            rounded-lg
            justify-between
            p-1
          "
        >
          {tabs.map((t) => (
            <Button
              key={t}
              className="
                whitespace-nowrap
                rounded-lg
                bg-transparent
                shadow-none
                text-[#669AFF]
                hover:bg-[#CCDDFF]
                hover:border hover:border-[#669AFF]
              "
            >
              <Typography variant="l2">{t}</Typography>
            </Button>
          ))}
        </div>

        {/* SEARCH
        <div className="w-full">
          <SearchBar />
        </div> */}
      </div>
    </div>
  )
}

export default UmpanBalikFilterTabs
