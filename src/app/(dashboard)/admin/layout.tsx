import { Suspense } from 'react'

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}
