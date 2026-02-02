// components/table/TestDataTable.tsx
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

export type TestStatus = 'Selesai' | 'Berjalan' | 'Dihentikan'
export type TestResultType = 'SEC' | 'RIA'

export interface MahasiswaTestTable {
  id: string
  name: string
  category: string
  status: TestStatus
  result: TestResultType
}
// Mock Data based on the image
// const TABLE_DATA = Array(8)
//   .fill({
//     id: '#KD-001',
//     name: 'Natasya Juliana',
//     category: 'Tes Profil Karir',
//     result: 'SEC', // or RIA
//   })
//   .map((item, i) => ({
//     ...item,
//     // Randomize statuses for visual fidelity to image
//     status: i % 3 === 0 ? 'Selesai' : i % 3 === 1 ? 'Berjalan' : 'Dihentikan',
//     result: i % 2 === 0 ? 'SEC' : 'RIA',
//   }))
interface TestDataTableProps {
  tableData: MahasiswaTestTable[]
}

export default function TestDataTable({ tableData }: TestDataTableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(10)

  const totalData = tableData.length
  const totalPages = Math.ceil(totalData / perPage)

  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * perPage
    return tableData.slice(start, start + perPage)
  }, [currentPage, perPage])

  return (
    <div className="w-full bg-white rounded-2xl p-6  border border-gray-200 rounded-2xl">
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
            Menampilkan 10 dari 120 data hasil tes
          </Typography>
        </div>
        <div className="w-full justify-start lg:justify-end flex gap-3 lg:flex-row flex-col">
          <Button className="border-[#E24A4A] border-1  hover:bg-red-100 bg-[#F8D4D4]/25 text-[#E24A4A] gap-2">
            <Trash2 className="w-4 h-4" />
            <Typography variant="l1" weight="medium" className="text-red-600">
              Hapus Data
            </Typography>
          </Button>
          <Button className="border-[#0046CC] border-1 bg-[#CCDDFF]/25 hover:bg-blue-100 text-[#0046CC] gap-2">
            {/* Using UploadCloud as a proxy for the export icon */}
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
            <TableRow className=" border-gray-200 rounded-xl">
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
            {paginatedData.map((row) => (
              <TableRow className="hover:bg-gray-50/50 border-b border-gray-200">
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
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer / Pagination */}
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
    </div>
  )
}
