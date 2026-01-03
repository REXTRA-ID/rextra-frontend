'use client'

import React from 'react'
import { Bell } from 'lucide-react'
import NextImage from '@/components/next-image'

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-[#B5B7B8] flex items-center justify-between px-8 w-full">
      {/* KIRI: Kosong atau Breadcrumbs (bisa diisi nanti) */}
      <div></div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
            <Bell size={20} />
          </div>
          <span className="absolute top-2 right-3 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
        </button>

        {/* Separator (Optional vertical line) */}
        <div className="h-8 w-px bg-gray-200 mx-1"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100">
            <NextImage src="/dashboard/Gajah.jpg" alt="User Avatar" fill />
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800">
              Admin Rextra
            </span>
            <span className="text-xs text-gray-500">rextra@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}
