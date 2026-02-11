'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2, UploadCloud, Pencil } from 'lucide-react'
import { StatusBadge } from './StatusBadge'
import { TablePagination } from './TablePagination'
import Typography from '@/components/Typography'
import HapusDataPopUp from './kenali-diri/HapusDataPopUp'
import ExporDataPopUp from './kenali-diri/ExporDataPopUp'

export type TestStatus = 'Selesai' | 'Berjalan' | 'Dihentikan'

export type TestResultType = 'SEC' | 'RIA' | string

export interface MahasiswaTestTable {
  id: string
  name: string
  category: string
  status: TestStatus
  result: TestResultType
}

interface TestDataTableProps {
  tableData: MahasiswaTestTable[]
  search?: string
  status?: TestStatus | 'Semua Data'
  category?: string
  result?: TestResultType
  sort?: string // Added Sort Prop
}

export default function TestDataTable({
  tableData,
  search = '',
  status = 'Semua Data',
  category,
  result,
  sort, // Destructure Sort
}: TestDataTableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(10)
  const [openDelete, setOpenDelete] = React.useState(false)
  const [openDeleteMassal, setOpenDeleteMassal] = React.useState(false)
  const [openExportData, setExportData] = React.useState(false)

  /* =========================
      FILTERING & SORTING
  ========================== */
  const processedData = React.useMemo(() => {
    // 1. Filter
    let data = tableData.filter((item) => {
      /* SEARCH */
      const searchLower = (search || '').toLowerCase()
      const matchesSearch =
        !search ||
        (item.name || '').toLowerCase().includes(searchLower) ||
        (item.category || '').toLowerCase().includes(searchLower) ||
        (item.id || '').toLowerCase().includes(searchLower) ||
        (item.result || '').toLowerCase().includes(searchLower)

      /* STATUS */
      const matchesStatus = status === 'Semua Data' || item.status === status

      /* CATEGORY */
      let matchesCategory = true
      if (category && category !== 'all') {
        const targetCategory =
          category === 'career'
            ? 'Tes Profil Karir'
            : category === 'minat_bakat'
              ? 'Tes Minat Bakat'
              : category === 'kepribadian'
                ? 'Tes Kepribadian'
                : category
        matchesCategory = item.category === targetCategory
      }

      /* RESULT */
      let matchesResult = true
      if (result && result !== 'all') {
        matchesResult = item.result.toLowerCase() === result.toLowerCase()
      }

      return matchesSearch && matchesStatus && matchesCategory && matchesResult
    })

    // 2. Sort
    if (sort) {
      data = [...data].sort((a, b) => {
        if (sort === 'az') {
          return a.name.localeCompare(b.name)
        }
        if (sort === 'za') {
          return b.name.localeCompare(a.name)
        }
        if (sort === 'newest') {
          // Sort by ID Descending as a proxy for "Newest" if no date exists in tableData
          return b.id.localeCompare(a.id)
        }
        return 0
      })
    }

    return data
  }, [tableData, search, status, category, result, sort])

  const totalData = processedData.length
  const totalPages = Math.ceil(totalData / perPage) || 1

  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * perPage
    return processedData.slice(start, start + perPage)
  }, [processedData, currentPage, perPage])

  React.useEffect(() => {
    setCurrentPage(1)
  }, [search, status, category, result, sort])

  return (
    <div className="w-full bg-white rounded-2xl p-6 border border-gray-200">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        <div className="w-full">
          <Typography
            variant="h6"
            weight="bold"
            className="text-gray-900 text-center lg:text-start"
          >
            List Data
          </Typography>
          <Typography
            variant="l1"
            className="text-gray-500 mt-1 text-center lg:text-start"
          >
            Menampilkan {paginatedData.length} dari {totalData} data hasil tes
          </Typography>
        </div>
        <div className="w-full justify-start lg:justify-end flex gap-3 lg:flex-row flex-col">
          <Button
            className="border-[#E24A4A] border-1 hover:bg-red-100 bg-[#F8D4D4]/25 text-[#E24A4A] gap-2"
            onClick={() => setOpenDeleteMassal(true)}
          >
            <Trash2 className="w-4 h-4" />
            <Typography variant="l1" weight="medium" className="text-red-600">
              Hapus Data
            </Typography>
          </Button>
          <Button
            className="border-[#0046CC] border-1 bg-[#CCDDFF]/25 hover:bg-blue-100 text-[#0046CC] gap-2"
            onClick={() => setExportData(true)}
          >
            <Typography variant="l1" weight="medium" className="text-blue-600">
              Ekspor Data
            </Typography>
            <UploadCloud className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 rounded-xl">
              <TableHead className="text-center"></TableHead>
              <TableHead>
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700 text-center"
                >
                  ID Test
                </Typography>
              </TableHead>
              <TableHead>
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700 text-center"
                >
                  Nama
                </Typography>
              </TableHead>
              <TableHead>
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700 text-center"
                >
                  Kategori
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700 text-center"
                >
                  Status
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700"
                >
                  Hasil
                </Typography>
              </TableHead>
              <TableHead className="text-center">
                <Typography
                  variant="l1"
                  weight="medium"
                  className="text-gray-700"
                >
                  Aksi
                </Typography>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-0">
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  <Typography variant="l1" className="text-gray-500">
                    Tidak ada data ditemukan.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50/50 border-b border-gray-200"
                >
                  <TableCell className="text-center">
                    <Checkbox className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="l1"
                      className="text-gray-600 text-center"
                    >
                      {row.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="l1"
                      weight="medium"
                      className="text-gray-900 text-center"
                    >
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="l1"
                      className="text-gray-900 text-center"
                    >
                      {row.category}
                    </Typography>
                  </TableCell>
                  <TableCell className="flex justify-center text-center">
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell className="text-center">
                    <Typography variant="l1" className="text-gray-900">
                      {row.result}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => setOpenDelete(true)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        perPage={perPage}
        totalData={totalData}
        onPageChange={setCurrentPage}
        onPerPageChange={(v) => {
          setCurrentPage(1)
          setPerPage(v)
        }}
      />

      <HapusDataPopUp open={openDelete} onClose={() => setOpenDelete(false)}>
        <Typography className="mt-3 text-gray-600 text-sm">
          Apakah Anda yakin akan menghapus data tes dengan ID{' '}
          <span className="font-semibold">#KD-001</span> milik{' '}
          <span className="font-semibold">Natasya Juliana</span>?
        </Typography>
      </HapusDataPopUp>

      <HapusDataPopUp
        open={openDeleteMassal}
        onClose={() => setOpenDeleteMassal(false)}
      >
        <Typography className="mt-3 text-gray-600 text-sm">
          Apakah Anda yakin akan menghapus sebanyak
          <span className="text-[#DC2626]"> 2000 data</span> tes Profil Karier?
        </Typography>
      </HapusDataPopUp>

      <ExporDataPopUp
        open={openExportData}
        onClose={() => setExportData(false)}
      />
    </div>
  )
}
