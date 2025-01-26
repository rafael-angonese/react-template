import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { useCompaniesFilters } from '@/pages/companies/list/hooks/use-companies-filters'
import { getCompanies } from '@/repositories/companies/get-companies'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const useListCompanies = () => {
  const { page, id, name } = useCompaniesFilters()

  const query = useQuery({
    queryKey: [
      queryKeys.companies,
      { page, id: useDebounce(id), name: useDebounce(name) },
    ],
    queryFn: () => getCompanies({ page, id, name }),
    placeholderData: keepPreviousData,
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  return query
}
