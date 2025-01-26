import { http, HttpResponse } from 'msw'

import { HttpErrorCode } from '@/constants/http-error-code'
import { apiBaseURL } from '@/lib/api'
import { BaseAdonisErrorDataResponse } from '@/utils/handling-request-error/request-error'

import { LoginRequest, LoginResponse } from './login'

export const loginMock = http.post<
  never,
  LoginRequest,
  LoginResponse | BaseAdonisErrorDataResponse
>(`${apiBaseURL}/auth/login`, async ({ request }) => {
  const { email } = await request.json()

  if (email === 'email@error.com') {
    return HttpResponse.json(
      {
        code: HttpErrorCode.AUTHENTICATION_FAILED,
      },
      { status: 400 },
    )
  }

  return HttpResponse.json(
    {
      type: 'bearer',
      token: 'asdf1234asdf',
      refreshToken: 'asdf1234asdf',
      expires_at: '2024-08-16T15:13:32.474-03:00',
    },
    { status: 200 },
  )
})
