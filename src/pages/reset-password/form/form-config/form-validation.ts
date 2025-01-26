import { passwordValidation } from '@/constants/password-validation'
import yup from '@/lib/yup'

import { formLabels } from './form-labels'

export const formValidation = yup.object().shape({
  password: yup
    .string()
    .concat(passwordValidation())
    .required()
    .label(formLabels.password),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'As senhas não correspondem')
    .label(formLabels.confirmPassword),
})
