import ProtectedLayout from '@/components/ProtectedLayout'
import { Suspense } from 'react'

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      <Suspense>{children}</Suspense>
    </ProtectedLayout>
  )
}
