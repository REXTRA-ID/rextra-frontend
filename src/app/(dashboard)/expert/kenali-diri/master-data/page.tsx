'use client'

import React, { useMemo, useState } from 'react'
import DataTabsMasterData from '@/app/(dashboard)/components/master-data/DataTabsMasterData'
import MasterDataHead from '@/app/(dashboard)/components/master-data/MasterDataHead'
import { RIASECType } from '@/app/(dashboard)/components/master-data/RIASECTypeBubble'

export type RIASECItem = {
  id: number
  types: RIASECType[]
}

export default function MasterData() {
  const [data] = useState<RIASECItem[]>([
    { id: 1, types: ['R'] },
    { id: 2, types: ['R', 'I'] },
    { id: 3, types: ['R', 'I', 'S'] },
    { id: 4, types: ['S'] },
    { id: 5, types: ['E', 'C'] },
    { id: 6, types: ['R', 'I', 'S'] },
  ])

  const [filter, setFilter] = useState<'all' | 1 | 2 | 3>('all')
  const [search, setSearch] = useState('')

  // 🔹 Counts (always based on full data)
  const counts = useMemo(() => {
    const one = data.filter((d) => d.types.length === 1).length
    const two = data.filter((d) => d.types.length === 2).length
    const three = data.filter((d) => d.types.length === 3).length

    return {
      all: data.length,
      one,
      two,
      three,
    }
  }, [data])

  // 🔹 Filter + Search Combined
  const filteredData = useMemo(() => {
    let result = data

    // Filter by length
    if (filter !== 'all') {
      result = result.filter((d) => d.types.length === filter)
    }

    // Search by RIASEC combination
    if (search.trim() !== '') {
      const keyword = search.toUpperCase()

      result = result.filter((d) => d.types.join('').includes(keyword))
    }

    return result
  }, [data, filter, search])

  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <MasterDataHead search={search} onSearchChange={setSearch} />

        <DataTabsMasterData
          data={filteredData}
          counts={counts}
          activeFilter={filter}
          onFilterChange={setFilter}
        />
      </div>
    </div>
  )
}
