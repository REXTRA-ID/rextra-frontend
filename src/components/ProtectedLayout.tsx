'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { isAuthenticated } from '@/lib/auth'
import { getAccessToken, removeTokens } from '@/lib/cookies'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const hasShownToast = useRef(false)

  // 1️⃣ Revalidate saat mount
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
    }
  }, [router])

  // 2️⃣ Auto logout + toast saat token expired
  useEffect(() => {
    const token = getAccessToken()
    if (!token) return

    let payload
    try {
      payload = JSON.parse(atob(token.split('.')[1]))
    } catch {
      return
    }

    const expiresIn = payload.exp * 1000 - Date.now()

    const logout = () => {
      if (!hasShownToast.current) {
        toast.error('Sesi kamu telah berakhir. Silakan login kembali.')
        hasShownToast.current = true
      }
      removeTokens()
      router.replace('/login')
    }

    if (expiresIn <= 0) {
      logout()
      return
    }

    const timeout = setTimeout(logout, expiresIn)
    return () => clearTimeout(timeout)
  }, [router])

  return children
}
