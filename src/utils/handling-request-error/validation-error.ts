import { AxiosError, AxiosResponse } from 'axios'

import { AdonisRulesTranslations } from '@/constants/adonis-rules-translation'
import { HttpStatusCode } from '@/constants/http-status-code'

export interface AdonisUnprocessableEntityResponse {
  field: string
  message: string
  rule: keyof typeof AdonisRulesTranslations
  args?: Record<string, string>
}

export interface ValidationResponse extends AxiosResponse {
  status: HttpStatusCode.UNPROCESSABLE_ENTITY
  data: {
    errors: AdonisUnprocessableEntityResponse[]
  }
}

export interface ValidationError extends AxiosError {
  response: ValidationResponse
}
