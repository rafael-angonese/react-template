import { AxiosRequestConfig } from 'axios'

import { DEFAULT_PER_PAGE } from '@/constants/default-per-page'
import { api } from '@/lib/api'
import { Meta } from '@/types/meta'
import { Role } from '@/types/role'
import { toQueryString } from '@/utils/to-query-string'

export interface GetRolesRequest {
  page: number
  perPage?: number
  id?: string
  name?: string
}

export interface GetRolesResponse {
  data: Role[]
  meta: Meta
}

export const getRoles = (
  { page, perPage, id, name }: GetRolesRequest,
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

  return api.get<GetRolesResponse>(`/roles${queryString}`, config)
}
