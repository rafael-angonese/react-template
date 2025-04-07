import yup from '@/lib/yup'
import { formLabels } from '@/pages/products/new/form-labels'

export const createProductSchema = yup.object().shape({
  name: yup.string().required().label(formLabels.name),
  price: yup.number().nullable().positive().required().label(formLabels.price),
})

export type CreateProductType = yup.InferType<typeof createProductSchema>
