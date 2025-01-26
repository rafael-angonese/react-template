import { http, HttpResponse } from 'msw'

import { Status } from '@/constants/status'
import { apiBaseURL } from '@/lib/api'

import { UserMe } from './me'

export const meMock = http.get<never, never, UserMe>(
  `${apiBaseURL}/auth/me`,
  async () => {
    return HttpResponse.json(
      {
        id: 1,
        name: 'Test test',
        email: 'test@example.com',
        status: Status.ACTIVE,
        created_at: '2021-08-16T15:13:32.474-03:00',
        updated_at: '2021-08-16T15:13:32.474-03:00',
        photo: '',
        recovery_token: '',
        companies: [],
        company_ids: [],
        role_ids: [],
        roles: [],
      },
      { status: 200 },
    )
  },
)
