import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Company } from '@/types/company'

export interface CreateCompanyRequest {
  name: string
}

export const createCompany = (
  data: CreateCompanyRequest,
  config?: AxiosRequestConfig,
) => {
  return api.post<Company>('/companies', data, config)
}
