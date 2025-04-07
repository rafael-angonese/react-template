import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { createProductSchema } from '@/pages/products/new/productSchema'

export const useProductForm = () => {
  return useForm({
    resolver: yupResolver(createProductSchema),
    defaultValues: {
      name: '',
      price: undefined,
    },
  })
}
