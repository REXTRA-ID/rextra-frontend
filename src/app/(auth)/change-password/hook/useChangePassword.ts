// hook/useChangePassword.ts
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'
import toast from 'react-hot-toast'

export const useChangePassword = (token: string | null) => {
  return useMutation({
    mutationFn: (newPassword: string) =>
      api.post(`/api/v1/auth/change?token=${token}`, {
        new_password: newPassword,
      }),

    onSuccess: () => {
      toast.success('Password berhasil diubah, silakan login')
    },

    onError: () => {
      toast.error('Gagal mengubah password')
    },
  })
}
