import { passwordValidation } from '@/constants/password-validation'
import yup from '@/lib/yup'

import { formLabels } from './form-labels'

export const formValidation = yup.object().shape({
  name: yup.string().required().label(formLabels.name),
  email: yup.string().required().label(formLabels.email),
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
  companiesIds: yup
    .array()
    .of(yup.object())
    .required()
    .label(formLabels.companiesIds),
  roleIds: yup.array().of(yup.object()).required().label(formLabels.roleIds),
})
