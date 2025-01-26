import { AxiosRequestConfig } from 'axios'

import { DEFAULT_PER_PAGE } from '@/constants/default-per-page'
import { api } from '@/lib/api'
import { Company } from '@/types/company'
import { Meta } from '@/types/meta'
import { toQueryString } from '@/utils/to-query-string'

export interface GetCompaniesRequest {
  page: number
  perPage?: number
  id?: string
  name?: string
}

export interface GetCompaniesResponse {
  data: Company[]
  meta: Meta
}

export const getCompanies = (
  { page, perPage, id, name }: GetCompaniesRequest,
  config?: AxiosRequestConfig,
) => {
  const params = {
    perPage: perPage || DEFAULT_PER_PAGE,
    page,
    ...(id && {
      id,
    }),
    ...(name && {
      name,
    }),
  }

  const queryString = toQueryString(params)

  return api.get<GetCompaniesResponse>(`/companies${queryString}`, config)
}
