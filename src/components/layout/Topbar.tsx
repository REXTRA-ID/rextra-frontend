'use client'

import { cn } from '@/lib/utils'
import { Menu, LogOut } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import NextImage from '../next-image'

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="h-16 md:h-20 bg-white shadow flex items-center px-4 md:px-8 gap-4 relative min-w-0">
      <button className="md:hidden">
        <Menu />
      </button>

      <input
        className={cn(
          'flex-1 min-w-0 h-10 md:h-12',
          'px-3 md:px-12 border rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
        )}
        placeholder="Search"
      />

      {/* Profile */}
      <div className="relative shrink-0" ref={ref}>
        {/* Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 shrink-0">
            <NextImage
              width={40}
              height={40}
              alt="Gajah"
              src="/dashboard/Gajah.jpg"
              className="w-full h-full"
              imgClassName="rounded-full object-cover"
            />
          </div>

          {/* Desktop only */}
          <div className="hidden md:block text-left">
            <p className="text-sm text-gray-600 font-semibold">Admin Rextra</p>
            <p className="text-xs text-gray-400">rextra@gmail.com</p>
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="
              absolute right-0 mt-3
              w-56
              bg-white
              rounded-xl
              shadow-lg
              border
              z-50
              overflow-hidden
            "
          >
            {/* Mobile Info */}
            <div className="md:hidden px-4 py-3 border-b">
              <p className="text-sm font-semibold text-gray-700">
                Admin Rextra
              </p>
              <p className="text-xs text-gray-400">rextra@gmail.com</p>
            </div>

            {/* Action */}
            <button
              className="
                w-full
                flex items-center gap-3
                px-4 py-3
                text-sm text-red-500
                hover:bg-red-50
                transition
              "
            >
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
