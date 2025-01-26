import { AxiosRequestConfig } from 'axios'

import { DEFAULT_PER_PAGE } from '@/constants/default-per-page'
import { api } from '@/lib/api'
import { Meta } from '@/types/meta'
import { User } from '@/types/user'
import { toQueryString } from '@/utils/to-query-string'

export interface GetUsersRequest {
  page: number
  perPage?: number
  id?: string
  name?: string
}

export interface GetUsersResponse {
  data: User[]
  meta: Meta
}

export const getUsers = (
  { page, perPage, id, name }: GetUsersRequest,
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

  return api.get<GetUsersResponse>(`/users${queryString}`, config)
}
