'use client'

import * as React from 'react'
// import Image from 'next/image'
import { FileText, Upload, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// import { Input } from '@/components/ui/input'
import Typography from '@/components/Typography'
import { DateTrigger } from '../DateTrigger'

interface ExporDataPopUpProps {
  open: boolean
  onClose: () => void
}

export default function ExporDataPopUp({ open, onClose }: ExporDataPopUpProps) {
  const [exportAll, setExportAll] = React.useState<boolean>(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[560px] rounded-[20px] bg-white px-6 sm:px-8 py-8 shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:opacity-70"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCDDFF]">
            <FileText className="text-[#003499]" />
          </div>

          <div>
            <Typography variant="t1" weight="semibold">
              Ekspor Data
            </Typography>
            <Typography className="mt-1 text-sm text-gray-500">
              Ekspor riwayat tes mahasiswa pada fitur Kenali Diri
            </Typography>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-6">
          {/* Kategori & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-[#6B6F70]">
              <Typography className="mb-2 text-sm font-medium">
                Kategori Tes
              </Typography>
              <Select defaultValue="all">
                <SelectTrigger className="border-1 border-[#6B6F70] w-full">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent className="text-[#6B6F70]">
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="profil">Tes Profil Karir</SelectItem>
                  <SelectItem value="minat">Tes Minat Bakat</SelectItem>
                  <SelectItem value="kepribadian">Tes Kepribadian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-[#6B6F70]">
              <Typography className="mb-2 text-sm font-medium">
                Status Tes
              </Typography>
              <Select defaultValue="berjalan">
                <SelectTrigger className="border-1 border-[#6B6F70] w-full">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent className="text-[#6B6F70]">
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="berjalan">Sedang Berjalan</SelectItem>
                  <SelectItem value="selesai">Selesai</SelectItem>
                  <SelectItem value="dihentikan">Dihentikan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Rentang Waktu */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Typography className="text-sm font-medium">
                Rentang Waktu
              </Typography>

              <label className="flex items-center gap-x-3 text-sm cursor-pointer ">
                <Checkbox
                  checked={exportAll}
                  onCheckedChange={(v) => setExportAll(Boolean(v))}
                />
                <Typography
                  variant="l1"
                  weight="regular"
                  className="text-[#464B4D]"
                >
                  Ekspor seluruh data
                </Typography>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <Typography className="mb-2 text-sm text-gray-500">
                  Dari
                </Typography>
                <DateTrigger
                  placeholder="Mulai"
                  // value={filters.startDate}
                  // onChange={(date) => onChange('startDate', date)}
                  className=" w-full rounded-xl border-gray-200"
                />
              </div>

              <div className="w-full">
                <Typography className="mb-2 text-sm text-gray-500">
                  Sampai
                </Typography>
                <DateTrigger
                  placeholder="Sampai"
                  // value={filters.startDate}
                  // onChange={(date) => onChange('startDate', date)}
                  className="w-full rounded-xl border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-8">
          <Button className="w-1/4 bg-[#CCDDFF] border-1 border-[#0046CC] hover:bg-[#0046CC]/90 gap-2 text-[#0046CC]">
            Ekspor Data
            <Upload />
          </Button>
        </div>
      </div>
    </div>
  )
}
