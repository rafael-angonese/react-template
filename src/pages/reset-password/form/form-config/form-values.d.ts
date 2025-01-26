import yup from '@/lib/yup'

import { formValidation } from './form-validation'

export interface FormValues extends yup.InferType<typeof formValidation> {}
