import type React from 'react'
import ProtectedLayout from '@/components/ProtectedLayout'
import { Suspense } from 'react'
import Navbar from '@/layout/Navbar'
import Sidebar from '@/layout/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedLayout>
      <Suspense fallback={null}>
        <div className="flex min-h-screen bg-white">
          {/* 1. Sidebar (Kiri) - Hidden di mobile, visible di md ke atas */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>

          {/* 2. Main Content Wrapper (Kanan) */}
          <div className="flex-1 flex flex-col min-h-screen min-w-0">
            {/* Navbar (Atas) */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto bg-white">
              <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </Suspense>
    </ProtectedLayout>
  )
}
