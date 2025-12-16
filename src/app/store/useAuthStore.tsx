import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { produce } from 'immer'
import { create } from 'zustand'

import { User, withToken } from '@/types/entity/user'
import { removeTokens, setAccessToken } from '@/lib/cookies'

type AuthStoreType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (user: User & withToken) => void
  logout: () => void
  stopLoading: () => void
}

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: (user) => {
    setAccessToken(user.token)
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = true
        state.user = user
      }),
    )
  },
  logout: () => {
    removeTokens()
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = false
        state.user = null
      }),
    )
  },
  stopLoading: () => {
    set(
      produce<AuthStoreType>((state) => {
        state.isLoading = false
      }),
    )
  },
}))

const useAuthStore = createSelectorHooks(useAuthStoreBase)

export default useAuthStore
