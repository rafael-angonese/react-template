import yup from '@/lib/yup'

import { formValidation } from './form-validation'

export type FormValues = yup.InferType<typeof formValidation>

// export interface FormValues {
//   email: string
//   password: string
// }
