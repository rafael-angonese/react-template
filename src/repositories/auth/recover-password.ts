import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'

export interface RecoverPasswordRequest {
  email: string
}

export const recoverPassword = (
  data: RecoverPasswordRequest,
  config?: AxiosRequestConfig,
) => {
  return api.post('/auth/recover-password', data, config)
}
