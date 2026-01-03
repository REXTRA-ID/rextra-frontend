import Navbar from '@/layout/Navbar'
import Sidebar from '@/layout/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* 1. Sidebar (Kiri) */}
      {/* Sidebar sudah mengatur width-nya sendiri (fixed/expanded) */}
      <Sidebar />

      {/* 2. Main Content Wrapper (Kanan) */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar (Atas) */}
        <Navbar />

        {/* Page Content (Bawah) */}
        <main className="flex-1 p-8 overflow-y-auto bg-gray-50/50">
          {children}
        </main>
      </div>
    </div>
  )
}
