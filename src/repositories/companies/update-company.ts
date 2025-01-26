import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Company } from '@/types/company'

export interface UpdateCompanyRequest {
  name?: string
}

export const updateCompany = (
  id: number | string,
  data: UpdateCompanyRequest,
  config?: AxiosRequestConfig,
) => {
  return api.put<Company>(`/companies/${id}`, data, config)
}
