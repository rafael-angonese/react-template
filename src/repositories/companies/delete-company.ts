import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { User } from '@/types/user'

export const deleteCompany = (
  id: string | number,
  config?: AxiosRequestConfig,
) => {
  return api.delete<User>(`/companies/${id}`, config)
}
