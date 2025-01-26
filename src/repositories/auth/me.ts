import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Company } from '@/types/company'
import { Role } from '@/types/role'
import { User } from '@/types/user'

export interface UserMe extends User {
  company_ids: number[]
  role_ids: number[]
  roles: Role[]
  companies: Company[]
}

export const me = (config?: AxiosRequestConfig) => {
  return api.get<UserMe>('/auth/me', config)
}
