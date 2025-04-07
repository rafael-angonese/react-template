import { useMutation, useQueryClient } from '@tanstack/react-query'

import { queryKeys } from '@/constants/react-query-keys'
import { createProduct } from '@/repositories/products/create-product'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.products] })
    },
  })

  return mutation
}
