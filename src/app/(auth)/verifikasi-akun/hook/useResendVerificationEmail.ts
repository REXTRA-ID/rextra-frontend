// useResendVerificationEmail.ts
'use client'

import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'
import toast from 'react-hot-toast'

export const useResendVerificationEmail = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      await api.post('/api/v1/auth/send-email', { email })
    },
    onSuccess: () => {
      toast.success('Email verifikasi berhasil dikirim ulang')
    },
    onError: () => {
      toast.error('Gagal mengirim ulang email')
    },
  })
}
