import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'
// import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { getAccessToken, getRefreshToken } from '@/lib/cookies'
import Cookies from 'universal-cookie'

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  //   const router = useRouter()

  const cookies = new Cookies()

  return useMutation({
    mutationFn: async () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) {
        throw new Error('Token tidak lengkap')
      }

      return api.delete('/api/v1/auth/logout', {
        data: {
          refresh_token: refreshToken,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    },

    onSuccess: () => {
      cookies.remove('@rextra/access_token', { path: '/' })
      cookies.remove('@rextra/refresh_token', { path: '/' })

      // Bersihkan cache
      queryClient.clear()

      toast.success('Berhasil logout')
      window.location.href = '/login'
    },

    onError: () => {
      toast.error('Gagal logout')
    },
  })
}
