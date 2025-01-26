import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  refreshToken: string
  type: string
  expires_at: string
}

export const login = (data: LoginRequest, config?: AxiosRequestConfig) => {
  return api.post<LoginResponse>('/auth/login', data, config)
}
