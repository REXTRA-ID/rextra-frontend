'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import api from '@/lib/api'
import { ApiResponse, UninterceptedApiError } from '@/types/api'
import { RegisterSchema } from '@/validation/register'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

export const useRegisterMutation = () => {
  const router = useRouter()

  const { mutate, isPending } = useMutation<
    ApiResponse<null>,
    AxiosError,
    z.infer<typeof RegisterSchema>
  >({
    mutationFn: async (data) => {
      const res = await api.post<ApiResponse<null>>(
        '/api/v1/auth/register',
        data,
      )
      return res.data
    },

    onSuccess: async (_data, variables) => {
      try {
        // 🔥 POST ke send-email setelah register sukses
        await api.post('/api/v1/auth/send-email', {
          email: variables.email,
        })

        toast.success('Registrasi berhasil, silakan cek email untuk verifikasi')
        router.push('/verifikasi-akun')
      } catch {
        toast.error('Registrasi berhasil, tapi gagal mengirim email verifikasi')
      }
    },

    onError: (error) => {
      const res = error.response?.data as UninterceptedApiError
      toast.error(
        typeof res?.message === 'string' ? res.message : 'Registrasi gagal',
      )
    },
  })

  return { mutate, isPending }
}
