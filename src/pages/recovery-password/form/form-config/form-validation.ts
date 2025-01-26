import yup from '@/lib/yup'

import { formLabels } from './form-labels'

export const formValidation = yup.object().shape({
  email: yup.string().required().label(formLabels.email),
})
