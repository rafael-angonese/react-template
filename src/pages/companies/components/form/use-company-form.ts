import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import yup from '@/lib/yup'

import { formValidation } from './form-config/form-validation'
import { initialFormState } from './form-config/initial-form-state'

export const useCompanyForm = () => {
  const methods = useForm<yup.InferType<typeof formValidation>>({
    mode: 'onChange',
    defaultValues: initialFormState,
    resolver: yupResolver(formValidation),
  })

  return methods
}
