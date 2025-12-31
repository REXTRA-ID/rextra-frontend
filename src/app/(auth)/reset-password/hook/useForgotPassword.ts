import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'
import toast from 'react-hot-toast'

export const useForgetPasswordMutation = () => {
  return useMutation({
    mutationFn: (email: string) => api.post('/api/v1/auth/forget', { email }),

    onSuccess: () => {
      toast.success('Email reset password berhasil dikirim')
    },

    onError: () => {
      toast.error('Gagal mengirim email reset password')
    },
  })
}
