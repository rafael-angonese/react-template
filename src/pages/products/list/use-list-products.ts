import { useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { useProductsFilters } from '@/pages/products/list/use-products-filters'
import { getProducts } from '@/repositories/products/get-products'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const useListProducts = () => {
  const { page, id, name } = useProductsFilters()

  const query = useQuery({
    queryKey: [
      queryKeys.products,
      { page, id: useDebounce(id), name: useDebounce(name) },
    ],
    queryFn: () => getProducts({ page, id, name }),
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  return query
}
