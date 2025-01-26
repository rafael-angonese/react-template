import { AxiosResponse } from 'axios'

import { AdonisErrorResponse } from '@/utils/handling-request-error/request-error'

export const isAdonisErrorWithCode = (
  response: AxiosResponse,
): response is AdonisErrorResponse => {
  return Boolean(response && response.data && response.data.code)
}
