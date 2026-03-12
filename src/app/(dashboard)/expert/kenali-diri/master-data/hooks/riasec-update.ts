'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import api from '@/lib/api'
import { ApiResponse, UninterceptedApiError } from '@/types/api'

type UpdateRiasecPayload = {
  id: number
  riasec_title: string
  riasec_description: string
  strengths: string[]
  challenges: string[]
  strategies: string[]
  work_environments: string[]
  interaction_styles: string[]
}

export const useUpdateRiasecMutation = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation<
    ApiResponse<null>,
    AxiosError,
    UpdateRiasecPayload
  >({
    mutationFn: async (data) => {
      const { id, ...body } = data

      const res = await api.put<ApiResponse<null>>(
        `/api/v1/admin/kenali-diri/riasec-codes/${id}`,
        body,
      )

      return res.data
    },

    onSuccess: (_, variables) => {
      toast.success('RIASEC berhasil diperbarui')

      queryClient.invalidateQueries({
        queryKey: ['riasec-detail', String(variables.id)],
      })

      queryClient.invalidateQueries({
        queryKey: ['riasec-codes'],
      })
    },

    onError: (error) => {
      const res = error.response?.data as UninterceptedApiError

      toast.error(
        typeof res?.message === 'string'
          ? res.message
          : 'Terjadi kesalahan saat update data',
      )
    },
  })

  return { mutate, isPending }
}
