import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { User } from '@/types/user'

export interface CreateUserRequest {
  name: string
  email: string
  password: string
  companiesIds: number[]
  roleIds: number[]
}

export const createUser = (
  data: CreateUserRequest,
  config?: AxiosRequestConfig,
) => {
  return api.post<User>('/users', data, config)
}
