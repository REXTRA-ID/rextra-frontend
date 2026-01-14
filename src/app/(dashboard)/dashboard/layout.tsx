import ProtectedLayout from '@/components/ProtectedLayout'
import { Suspense } from 'react'
import Navbar from '@/layout/Navbar'
import Sidebar from '@/layout/Sidebar'

export default function DashboardLayout() {
  return (
    <ProtectedLayout>
      <Suspense fallback={null}>
        <div className="flex min-h-screen bg-white">
          {/* 1. Sidebar (Kiri) */}
          {/* Sidebar sudah mengatur width-nya sendiri (fixed/expanded) */}
          <Sidebar />

          {/* 2. Main Content Wrapper (Kanan) */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Navbar (Atas) */}
            <Navbar />
          </div>
        </div>
      </Suspense>
    </ProtectedLayout>
  )
}
