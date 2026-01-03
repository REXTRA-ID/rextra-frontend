'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation' // Hook wajib untuk Next.js Active State
import {
  User,
  BarChart2,
  GraduationCap,
  Users,
  Heart,
  Building2,
  FileText,
  Trophy,
  DollarSign,
  ChevronDown,
  ChevronLeft,
} from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Data Menu (HREF harus unik agar active state bekerja) ---
const menuData = [
  {
    category: 'Mahasiswa',
    items: [
      {
        label: 'Akun Mahasiswa',
        icon: User,
        href: '/dashboard/mahasiswa/akun',
      },
      { label: 'Persona Rextra', icon: BarChart2, href: '/mahasiswa/persona' },
      {
        label: 'Pendidikan',
        icon: GraduationCap,
        href: '/mahasiswa/pendidikan',
      },
      {
        label: 'Rextra Club',
        icon: Users,
        href: '#', // Parent tanpa link langsung
        children: [{ label: 'Member List', href: '/rextra-club/members' }],
      },
      {
        label: 'Kenali Diri',
        icon: Heart,
        href: '#', // Parent dropdown biasanya '#' atau path base
        children: [
          { label: 'Master Data', href: '/kenali-diri/master' },
          { label: 'Hasil Tes', href: '/kenali-diri/hasil' },
          { label: 'Umpan Balik', href: '/kenali-diri/feedback' },
        ],
      },
    ],
  },
  {
    category: 'Perusahaan',
    items: [
      {
        label: 'Profil Perusahaan',
        icon: Building2,
        href: '/perusahaan/profil',
      },
      {
        label: 'Lowongan Pekerjaan',
        icon: FileText,
        href: '/perusahaan/loker',
      },
    ],
  },
  {
    category: 'Performa',
    items: [
      { label: 'Capaian Pengguna', icon: Trophy, href: '/performa/pengguna' },
      {
        label: 'Capaian Keuangan',
        icon: DollarSign,
        href: '/performa/keuangan',
      },
      {
        label: 'Visualisasi Performa',
        icon: BarChart2,
        href: '/performa/visualisasi',
      },
    ],
  },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  // 1. Ambil Path URL saat ini
  const pathname = usePathname()

  const toggleSidebar = () => setIsOpen(!isOpen)

  const toggleMenu = (label: string) => {
    if (!isOpen) {
      setIsOpen(true) // Auto expand sidebar jika user klik menu dropdown saat collapsed
      setTimeout(() => {
        setExpandedMenus((prev) =>
          prev.includes(label)
            ? prev.filter((item) => item !== label)
            : [...prev, label],
        )
      }, 150) // Delay sedikit agar transisi sidebar selesai
      return
    }
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    )
  }

  // 2. useEffect: Auto-Expand Accordion jika anak di dalamnya sedang aktif
  // Contoh: Jika buka '/kenali-diri/hasil', maka menu 'Kenali Diri' otomatis terbuka
  useEffect(() => {
    menuData.forEach((section) => {
      section.items.forEach((item) => {
        if (item.children) {
          // Cek apakah ada anak yang href-nya sama dengan pathname
          const isChildActive = item.children.some(
            (child) => child.href === pathname,
          )
          if (isChildActive) {
            setExpandedMenus((prev) =>
              // Cek agar tidak duplikat
              prev.includes(item.label) ? prev : [...prev, item.label],
            )
          }
        }
      })
    })
  }, [pathname])

  return (
    <aside
      className={cn(
        'h-screen bg-white border-r border-gray-100 flex flex-col transition-all duration-300 ease-in-out relative z-20',
        isOpen ? 'w-[318px]' : 'w-[139px]',
      )}
    >
      {/* HEADER */}
      <div className="h-20 flex items-center justify-between px-6 mb-4 mt-2">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <span
            className={cn(
              'font-extrabold text-2xl text-blue-900 transition-opacity duration-200',
              isOpen ? 'opacity-100' : 'opacity-0 hidden',
            )}
          >
            REXTRA
          </span>
        </div>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-gray-600"
          >
            <ChevronLeft size={24} />
          </button>
        )}
      </div>

      {/* MENU LIST */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-10">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3
              className={cn(
                'text-gray-400 text-sm mb-4 transition-all duration-300',
                isOpen ? 'text-left px-4' : 'text-center text-xs',
              )}
            >
              {section.category}
            </h3>

            <div className="space-y-2">
              {section.items.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isMenuExpanded = expandedMenus.includes(item.label)

                // LOGIKA ACTIVE STATE:
                // 1. Parent aktif jika URL sama persis
                // 2. Parent aktif jika salah satu anaknya aktif (opsional, untuk styling parent saat anak dipilih)
                const isSelfActive = pathname === item.href
                const isChildActive = item.children?.some(
                  (c) => c.href === pathname,
                )
                const isParentActive = isSelfActive || isChildActive

                return (
                  <div key={item.label}>
                    {/* Item Utama */}
                    {/* Jika punya anak, dia jadi Button (Toggle). Jika tidak, dia Link (Navigasi) */}
                    {hasChildren ? (
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className={cn(
                          'flex items-center w-full p-3 rounded-2xl transition-all duration-200 group relative',
                          isOpen
                            ? 'justify-between'
                            : 'justify-center flex-col gap-1',
                          isParentActive && isOpen
                            ? 'bg-blue-50 text-blue-900 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50',
                          isParentActive && !isOpen
                            ? 'bg-blue-50/50 text-blue-900'
                            : '',
                        )}
                      >
                        <div
                          className={cn(
                            'flex items-center gap-4',
                            !isOpen && 'flex-col gap-0',
                          )}
                        >
                          <item.icon
                            size={24}
                            className={cn(
                              isParentActive
                                ? 'text-blue-800'
                                : 'text-gray-500 group-hover:text-gray-700',
                            )}
                            strokeWidth={1.5}
                          />
                          <span
                            className={cn(
                              'whitespace-nowrap transition-all duration-200',
                              isOpen
                                ? 'opacity-100'
                                : 'opacity-0 w-0 h-0 hidden',
                            )}
                          >
                            {item.label}
                          </span>
                        </div>
                        {isOpen && (
                          <ChevronDown
                            size={18}
                            className={cn(
                              'transition-transform duration-200 text-gray-400',
                              isMenuExpanded ? 'rotate-180' : '',
                            )}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center w-full p-3 rounded-2xl transition-all duration-200 group relative',
                          isOpen
                            ? 'justify-start'
                            : 'justify-center flex-col gap-1',
                          // Active State untuk Single Menu
                          isSelfActive
                            ? 'bg-blue-50 text-blue-900 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50',
                        )}
                      >
                        <div
                          className={cn(
                            'flex items-center gap-4',
                            !isOpen && 'flex-col gap-0',
                          )}
                        >
                          <item.icon
                            size={24}
                            className={cn(
                              isSelfActive
                                ? 'text-blue-800'
                                : 'text-gray-500 group-hover:text-gray-700',
                            )}
                            strokeWidth={1.5}
                          />
                          <span
                            className={cn(
                              'whitespace-nowrap transition-all duration-200',
                              isOpen
                                ? 'opacity-100'
                                : 'opacity-0 w-0 h-0 hidden',
                            )}
                          >
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    )}

                    {/* Sub Menu */}
                    {hasChildren && isOpen && (
                      <div
                        className={cn(
                          'grid transition-all duration-300 ease-in-out overflow-hidden',
                          isMenuExpanded
                            ? 'grid-rows-[1fr] opacity-100 mt-2'
                            : 'grid-rows-[0fr] opacity-0 mt-0',
                        )}
                      >
                        <div className="min-h-0 pl-[2.85rem] relative">
                          <div className="absolute left-[1.9rem] top-0 bottom-4 w-px bg-gray-200"></div>
                          {item.children?.map((subItem, subIdx) => {
                            const isSubActive = pathname === subItem.href // Cek URL Sub Menu

                            return (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className="relative flex items-center py-2 pl-4 text-sm hover:text-blue-600 group/sub"
                              >
                                {/* Dot Indicator */}
                                <div
                                  className={cn(
                                    'absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 z-10 transition-colors',
                                    isSubActive
                                      ? 'border-blue-600 bg-blue-600'
                                      : 'border-gray-300 bg-white group-hover/sub:border-blue-400',
                                  )}
                                />

                                <span
                                  className={cn(
                                    isSubActive
                                      ? 'font-medium text-blue-900'
                                      : 'text-gray-500',
                                  )}
                                >
                                  {subItem.label}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full cursor-pointer bg-transparent"
          style={{ display: isOpen ? 'none' : 'block', pointerEvents: 'none' }}
        />
      )}
    </aside>
  )
}
