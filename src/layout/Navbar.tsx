'use client'

import { useState } from 'react'
import { Bell, Menu, X } from 'lucide-react'
import NextImage from '@/components/next-image'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="h-16 sm:h-20 bg-white border-b border-[#B5B7B8] flex items-center justify-between px-4 sm:px-6 md:px-8 w-full sticky top-0 z-10">
      {/* KIRI: Menu Toggle (Mobile) */}
      <button
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-gray-600" />
        ) : (
          <Menu size={24} className="text-gray-600" />
        )}
      </button>

      {/* Empty space for desktop */}
      <div className="hidden md:block"></div>

      {/* KANAN: Notifikasi dan User Info */}
      <div className={cn('flex items-center gap-4 sm:gap-6')}>
        <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
            <Bell size={20} />
          </div>
          <span className="absolute top-2 right-3 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
        </button>

        {/* Separator - Hidden on mobile */}
        <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

        {/* User Info - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex items-center gap-3 cursor-pointer">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <NextImage src="/dashboard/Gajah.jpg" alt="User Avatar" fill />
          </div>

          {/* User Info Text - Hidden on tablet small, visible on md+ */}
          <div className="hidden md:flex flex-col">
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
