import { Suspense } from 'react'
import VerifikasiAkun from './components/verifikasi-akun'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifikasiAkun />
    </Suspense>
  )
}
