import { passwordValidation } from '@/constants/password-validation'
import yup from '@/lib/yup'

import { formLabels } from './form-labels'

export const formValidation = yup.object().shape({
  name: yup.string().required().label(formLabels.name),
  email: yup.string().required().label(formLabels.email),
  companiesIds: yup
    .array(yup.object())
    .min(1)
    .required()
    .label(formLabels.companiesIds),
  roleIds: yup.array(yup.object()).min(1).required().label(formLabels.roleIds),

  password: yup
    .string()
    .emptyAsUndefined()
    .concat(passwordValidation())
    .nullable()
    .label(formLabels.password),
  confirmPassword: yup
    .string()
    .emptyAsUndefined()
    .when('password', {
      is: (password: string | undefined) => password && password.length > 0,
      then: (schema) =>
        schema
          .oneOf([yup.ref('password')], 'As senhas não correspondem')
          .required(),
    })
    .nullable()
    .label(formLabels.confirmPassword),
})
