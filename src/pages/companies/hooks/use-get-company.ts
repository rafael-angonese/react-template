import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { queryKeys } from '@/constants/react-query-keys'
import { getCompany } from '@/repositories/companies/get-company'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const useGetCompany = () => {
  const { id } = useParams()
  const query = useQuery({
    queryKey: [queryKeys.companies, { id }],
    queryFn: () => getCompany(id!),
    placeholderData: keepPreviousData,
    enabled: !!id,
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  return query
}
