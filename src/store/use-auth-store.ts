import { create } from 'zustand'

import { StorageKeys } from '@/constants/storage-keys'
import { api } from '@/lib/api'
import { me, UserMe } from '@/repositories/auth/me'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'
import LocalStorage from '@/utils/local-storage'

interface SignInProps {
  refreshToken: string
  token: string
}

export interface AuthStore {
  token: string | null
  refreshToken: string | null
  user: UserMe | null
  isLoading: boolean
  isAuthenticated: boolean
  checkAuth: () => void
  setAuth: (values: SignInProps) => Promise<void>
  logout: () => void
  reset: () => void
}

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
  isLoading: true,
  isAuthenticated: false,
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  ...initialState,
  checkAuth: async () => {
    const refreshToken = LocalStorage.getItem(StorageKeys.REFRESH_TOKEN)
    const token = LocalStorage.getItem(StorageKeys.TOKEN)

    if (token && refreshToken) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      try {
        const { data } = await me()

        set({
          token,
          refreshToken,
          user: data,
          isAuthenticated: true,
          isLoading: false,
        })
        return
      } catch (error) {
        handlingRequestError(error)
        get().logout()
      }
    }

    get().logout()
  },
  logout: () => {
    LocalStorage.removeItem(StorageKeys.AUTH_USER)
    LocalStorage.removeItem(StorageKeys.TOKEN)
    LocalStorage.removeItem(StorageKeys.REFRESH_TOKEN)
    delete api.defaults.headers.common.Authorization

    set({
      ...initialState,
      isLoading: false,
    })
  },
  setAuth: async ({ token, refreshToken }) => {
    LocalStorage.setItem(StorageKeys.TOKEN, token)
    LocalStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken)
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    set({
      token,
      refreshToken,
      isAuthenticated: true,
    })
  },
  reset: () => {
    set(initialState)
  },
}))
