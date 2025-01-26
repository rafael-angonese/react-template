import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { queryKeys } from '@/constants/react-query-keys'
import { getUser } from '@/repositories/users/get-user'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const useGetUser = () => {
  const { id } = useParams()
  const query = useQuery({
    queryKey: [queryKeys.users, { id }],
    queryFn: () => getUser(id!),
    placeholderData: keepPreviousData,
    enabled: !!id,
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  return query
}
