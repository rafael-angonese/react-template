import yup from '@/lib/yup'

import { formLabels } from './form-labels'

export const formValidation = yup.object({
  email: yup.string().email().required().label(formLabels.email),
  password: yup.string().required().label(formLabels.password),
})
