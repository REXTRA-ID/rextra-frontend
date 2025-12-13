'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import useAuthStore from '@/app/store/useAuthStore'
import api from '@/lib/api'
import { setToken } from '@/lib/cookies'
import { ApiResponse, UninterceptedApiError } from '@/types/api'
import { User } from '@/types/entity/user'
import { LoginSchema } from '@/validation/login'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

export const useLoginMutation = () => {
  const { login } = useAuthStore()

  const router = useRouter()

  const { mutate, isPending } = useMutation<
    ApiResponse<{ role: string; token: string }>,
    AxiosError,
    z.infer<typeof LoginSchema>
  >({
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      const res = await api.post<ApiResponse<{ role: string; token: string }>>(
        '/users/login',
        data,
      )
      const { token } = res.data.data
      setToken(token)

      const user = await api.get<ApiResponse<User>>('/users/me')
      if (user) login({ ...user.data.data, token: token })

      return res.data
    },
    onSuccess: (res) => {
      toast.success('Successfully logged in!')

      setTimeout(() => {
        if (res.data.role === 'ADMIN') {
          router.push('/admin')
        } else {
          router.push('/dashboard')
        }
      }, 1000)
    },
    onError: (error) => {
      const res = error.response?.data as UninterceptedApiError
      toast.error(
        typeof res.message === 'string' ? res.message : 'An error occurred',
      )
    },
  })

  return { mutate, isPending }
}
