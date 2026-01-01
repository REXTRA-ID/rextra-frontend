'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { auth } from '@/lib/firebase'
import api from '@/lib/api'
import useAuthStore from '@/app/store/useAuthStore'
import { ApiResponse, UninterceptedApiError } from '@/types/api'
import { User } from '@/types/entity/user'
import { setAccessToken, setRefreshToken } from '@/lib/cookies'

type GoogleLoginResponse = {
  role: string
  access_token: string
  refresh_token: string
}

export const useLoginWithGoogleMutation = () => {
  const { login } = useAuthStore()
  const router = useRouter()

  const { mutate, isPending } = useMutation<
    ApiResponse<GoogleLoginResponse>,
    AxiosError
  >({
    mutationFn: async () => {
      // 1️⃣ Login Google via Firebase
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      const firebaseUser = result.user
      const idToken = await firebaseUser.getIdToken()
      console.log('Id Token: ', idToken)

      // 2️⃣ Kirim ID Token ke Backend
      const res = await api.post<ApiResponse<GoogleLoginResponse>>(
        '/api/v1/auth/google',
        { id_token: idToken },
      )

      const { access_token, refresh_token } = res.data.data

      // 3️⃣ Simpan token ke cookies
      setAccessToken(access_token)
      setRefreshToken(refresh_token)

      // 4️⃣ Ambil data user
      const user = await api.get<ApiResponse<User>>('/api/v1/auth/me')
      if (user) {
        login({ ...user.data.data, token: access_token })
      }

      return res.data
    },

    onSuccess: (res) => {
      toast.success('Successfully logged in with Google!')

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
        typeof res?.message === 'string' ? res.message : 'Google login failed',
      )
    },
  })

  return { mutate, isPending }
}
