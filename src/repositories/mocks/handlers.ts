import { getSwaggerPetstoreMock } from '@/api/endpoints.msw'
import { loginMock } from '@/repositories/auth/login-mock'
import { meMock } from '@/repositories/auth/me-mock'

export const handlers = [loginMock, meMock, ...getSwaggerPetstoreMock()]
