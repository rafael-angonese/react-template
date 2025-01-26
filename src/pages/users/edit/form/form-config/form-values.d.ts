import yup from '@/lib/yup'
import { Company } from '@/types/company'
import { Role } from '@/types/role'

import { formValidation } from './form-validation'

export interface FormValues extends yup.InferType<typeof formValidation> {
  companiesIds: Company[]
  roleIds: Role[]
}
