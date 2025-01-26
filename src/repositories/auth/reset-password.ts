import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'

export interface ResetPasswordRequest {
  id: string
  recoveryToken: string
  password: string
}

export interface ResetPasswordResponse {
  email: string
}

export const resetPassword = (
  data: ResetPasswordRequest,
  config?: AxiosRequestConfig,
) => {
  return api.post<ResetPasswordResponse>('/auth/reset-password', data, config)
}
