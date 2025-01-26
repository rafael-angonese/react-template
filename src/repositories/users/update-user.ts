import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { User } from '@/types/user'

export interface UpdateUserRequest {
  name?: string
  email?: string
  password?: string
  companiesIds?: number[]
  roleIds?: number[]
}

export const updateUser = (
  id: number | string,
  data: UpdateUserRequest,
  config?: AxiosRequestConfig,
) => {
  return api.put<User>(`/users/${id}`, data, config)
}
