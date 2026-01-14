import ProtectedLayout from '@/components/ProtectedLayout'
import { Suspense } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedLayout>
      <Suspense fallback={null}>{children}</Suspense>
    </ProtectedLayout>
  )
}
