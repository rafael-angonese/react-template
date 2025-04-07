import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { Product } from '@/types/product'

export interface CreateProductRequest {
  name: string
  price: number
}

export const createProduct = (
  data: CreateProductRequest,
  config?: AxiosRequestConfig,
) => {
  return api.post<Product>('/products', data, config)
}
