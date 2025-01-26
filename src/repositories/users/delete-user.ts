import { AxiosRequestConfig } from 'axios'

import { api } from '@/lib/api'
import { User } from '@/types/user'

export const deleteUser = (
  id: string | number,
  config?: AxiosRequestConfig,
) => {
  return api.delete<User>(`/users/${id}`, config)
}
