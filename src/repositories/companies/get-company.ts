import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Company } from '@/types/company'

export const getCompany = (
  id: string | number,
  config?: AxiosRequestConfig,
) => {
  return api.get<Company>(`/companies/${id}`, config)
}
