import { AxiosError, AxiosResponse } from 'axios'

import { HttpErrorCode } from '@/constants/http-error-code'
import { HttpStatusCode } from '@/constants/http-status-code'

export interface BaseAdonisErrorDataResponse {
  error?: string
  code: HttpErrorCode
}

export interface BaseAdonisErrorResponse {
  status: HttpStatusCode.BAD_REQUEST
  data: BaseAdonisErrorDataResponse
}

export interface AdonisErrorResponseData extends BaseAdonisErrorResponse {}

export type AdonisAxiosResponse = AxiosResponse<
  BaseAdonisErrorResponse['data']
> & {
  status: HttpStatusCode.BAD_REQUEST
}

export interface AdonisErrorResponse extends AdonisAxiosResponse {}

export interface AdonisRequestError extends AxiosError {
  response: AdonisErrorResponse
}
