import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { useUsersFilters } from '@/pages/users/list/use-users-filters'
import { getUsers } from '@/repositories/users/get-users'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const useListUsers = () => {
  const { page, id, name } = useUsersFilters()

  const query = useQuery({
    queryKey: [
      queryKeys.users,
      { page, id: useDebounce(id), name: useDebounce(name) },
    ],
    queryFn: () => getUsers({ page, id, name }),
    placeholderData: keepPreviousData,
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  return query
}
