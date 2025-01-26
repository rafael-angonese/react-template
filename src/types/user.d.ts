import { Status } from '@/constants/status'

export interface User {
  id: number
  name: string
  email: string
  status: Status
  created_at: string
  updated_at: string
  photo: string
  recovery_token: string
}
