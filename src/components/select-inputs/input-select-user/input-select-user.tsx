import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import {
  InputSelect,
  InputSelectProps,
} from '@/components/ui/input-select/input-select'
import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { getUsers } from '@/repositories/users/get-users'
import { User } from '@/types/user'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export interface InputSelectUserProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
> extends Omit<
    InputSelectProps<User, Multiple, DisableClearable, false>,
    'options'
  > {}

export const InputSelectUser = <
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
>({
  ...props
}: InputSelectUserProps<Multiple, DisableClearable>) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const debouncedInputValue = useDebounce(inputValue)

  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.users, { name: debouncedInputValue }],
    queryFn: () =>
      getUsers({
        page: 1,
        perPage: 200,
        name: debouncedInputValue,
      }),
    enabled: open,
    placeholderData: keepPreviousData,
    throwOnError(error) {
      handlingRequestError(error)
      return false
    },
  })

  const users = data?.data?.data ?? []

  return (
    <InputSelect
      options={users}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      loading={isFetching}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue)
      }}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      {...props}
    />
  )
}

InputSelectUser.displayName = 'InputSelectUser'
