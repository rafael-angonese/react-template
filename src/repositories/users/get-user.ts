import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Company } from '@/types/company'
import { Role } from '@/types/role'
import { User } from '@/types/user'

export interface GetUserResponse extends User {
  roles: Role[]
  companies: Company[]
}

export const getUser = (id: string | number, config?: AxiosRequestConfig) => {
  return api.get<GetUserResponse>(`/users/${id}`, config)
}
