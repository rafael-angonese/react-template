import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { HttpErrorCode, HttpErrorCodeMap } from '@/constants/http-error-code'
import { HttpStatusCode } from '@/constants/http-status-code'
import { getAdonisValidationErrorMessage } from '@/utils/handling-request-error/get-adonis-validation-error-message'
import { isAdonisErrorWithCode } from '@/utils/handling-request-error/is-adonis-error-with-code'
import { isAdonisValidationError } from '@/utils/handling-request-error/is-adonis-validation-error'
import { ValidationError } from '@/utils/handling-request-error/validation-error'

const DEFAULT_REQUEST_ERROR_MESSAGE =
  'Não foi possível comunicar com o servidor.'

const DEFAULT_INTERNAL_ERROR_MESSAGE =
  'Ocorreu um erro interno em nossos servidores, por favor tente novamente!'

const handlingRequestError = (
  error: ValidationError | AxiosError | Error | unknown,
  labels?: Record<string, string>,
) => {
  // Error 😨 🚀

  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { data, status } = error.response

      if (status === HttpStatusCode.NOT_FOUND) {
        toast.error(
          'A página/recurso que você esta buscando não existe ou não está mais disponível!',
        )
      }

      if (status === HttpStatusCode.BAD_REQUEST) {
        if (isAdonisErrorWithCode(error.response)) {
          const code = error.response.data.code

          if (Object.values(HttpErrorCode).includes(code)) {
            toast.error(HttpErrorCodeMap[HttpErrorCode[code]])
          } else {
            toast.error(DEFAULT_INTERNAL_ERROR_MESSAGE)
          }
        } else {
          toast.error(DEFAULT_INTERNAL_ERROR_MESSAGE)
        }
      }

      if (status === HttpStatusCode.FORBIDDEN) {
        if (isAdonisErrorWithCode(error.response)) {
          const code = error.response.data.code

          if (Object.values(HttpErrorCode).includes(code)) {
            toast.error(HttpErrorCodeMap[HttpErrorCode[code]])
          } else {
            toast.error(
              'Você não possui permissão para acessar/utilizar este recurso!',
            )
          }
        } else {
          toast.error(
            'Você não possui permissão para acessar/utilizar este recurso!',
          )
        }
      }

      if (status === HttpStatusCode.PAYLOAD_TOO_LARGE) {
        toast.error(
          'A carga da requisição é mais larga que os limites estabelecidos pelo servidor!',
        )
      }

      if (
        status === HttpStatusCode.UNPROCESSABLE_ENTITY &&
        isAdonisValidationError(error.response) &&
        labels
      ) {
        const errors = error.response.data.errors

        errors.forEach((error) => {
          const message = getAdonisValidationErrorMessage(error, labels)
          toast.error(message)
        })
      }

      if (status === HttpStatusCode.INTERNAL_SERVER_ERROR) {
        toast.error(DEFAULT_INTERNAL_ERROR_MESSAGE)
      }

      if (status === 0) {
        toast.error(DEFAULT_REQUEST_ERROR_MESSAGE)
      }
      return { data, status }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      toast.error(DEFAULT_REQUEST_ERROR_MESSAGE)
    } else if (axios.isCancel(error)) {
      // console.log('Request cancelled...')
    } else {
      // Something happened in setting up the request that triggered an Error
      toast.error(DEFAULT_REQUEST_ERROR_MESSAGE)
    }
  } else {
    toast.error(DEFAULT_REQUEST_ERROR_MESSAGE)
  }
}

export default handlingRequestError
