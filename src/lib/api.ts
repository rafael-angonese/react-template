import axios from 'axios'
import { toast } from 'react-toastify'

import { HttpStatusCode } from '@/constants/http-status-code'
import { StorageKeys } from '@/constants/storage-keys'
import { env } from '@/env'
import { useAuthStore } from '@/store/use-auth-store'
import LocalStorage from '@/utils/local-storage'
import { sleep } from '@/utils/sleep'

export const apiBaseURL = `${env.API_BASE_URL}`

export const api = axios.create({
  baseURL: apiBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

if (env.ENABLE_API_DELAY) {
  api.interceptors.response.use(async (response) => {
    await sleep()
    return response
  })
}

api.interceptors.request.use((config) => {
  const token = LocalStorage.getItem(StorageKeys.TOKEN)
  config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (
      error.response.status === HttpStatusCode.UNAUTHORIZED &&
      originalRequest._retry
    ) {
      toast.warning('Sua sessão expirou, por favor faça login novamente.')
      useAuthStore.getState().logout()
    }

    if (error.response.status === HttpStatusCode.UNAUTHORIZED) {
      originalRequest._retry = true
      const newTokenData = await refreshToken()

      if (!newTokenData) {
        toast.warning('Sua sessão expirou, por favor faça login novamente.')
        useAuthStore.getState().logout()
      }

      if (newTokenData) {
        api.defaults.headers.common.Authorization = `Bearer ${newTokenData.token}`
        LocalStorage.setItem(StorageKeys.TOKEN, newTokenData.token)
        LocalStorage.setItem(
          StorageKeys.REFRESH_TOKEN,
          newTokenData.refreshToken,
        )

        return api(originalRequest)
      }
    }

    return Promise.reject(error)
  },
)

const refreshToken = async () => {
  try {
    const { data } = await api.post('auth/refresh', {
      refresh_token: LocalStorage.getItem(StorageKeys.REFRESH_TOKEN),
    })
    return data
  } catch (error) {
    return null
  }
}
