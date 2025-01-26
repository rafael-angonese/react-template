import { AxiosResponse } from 'axios'

import { ValidationResponse } from '@/utils/handling-request-error/validation-error'
import isPresent from '@/utils/is-present'

export const isAdonisValidationError = (
  response: AxiosResponse,
): response is ValidationResponse => {
  return Boolean(
    response &&
      response.data &&
      response.data.errors &&
      isPresent(response.data.errors),
  )
}
