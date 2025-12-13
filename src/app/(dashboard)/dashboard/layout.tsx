import { Suspense } from 'react'

export default function UserPage({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}
