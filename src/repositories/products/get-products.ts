import { AxiosRequestConfig } from 'axios'

import { DEFAULT_PER_PAGE } from '@/constants/default-per-page'
import { api } from '@/lib/api'
import { Meta } from '@/types/meta'
import { Product } from '@/types/product'
import { toQueryString } from '@/utils/to-query-string'

export interface GetProductsRequest {
  page: number
  perPage?: number
  id?: string
  name?: string
}

export interface GetProductsResponse {
  data: Product[]
  meta: Meta
}

export const getProducts = (
  { page, perPage, id, name }: GetProductsRequest,
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

  return api.get<GetProductsResponse>(`/products${queryString}`, config)
}
