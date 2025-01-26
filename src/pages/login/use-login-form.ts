import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { formValidation } from './form-config/form-validation'
import { FormValues } from './form-config/form-values'
import { initialFormState } from './form-config/initial-form-state'

export const useLoginForm = () => {
  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: initialFormState,
    resolver: yupResolver(formValidation),
  })

  return methods
}
