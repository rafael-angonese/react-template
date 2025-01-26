import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import {
  InputSelect,
  InputSelectProps,
} from '@/components/ui/input-select/input-select'
import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { getRoles } from '@/repositories/roles/get-roles'
import { Role } from '@/types/role'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export interface InputSelectRoleProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
> extends Omit<
    InputSelectProps<Role, Multiple, DisableClearable, false>,
    'options'
  > {}

export const InputSelectRole = <
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
>({
  ...props
}: InputSelectRoleProps<Multiple, DisableClearable>) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const debouncedInputValue = useDebounce(inputValue)

  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.roles, { name: debouncedInputValue }],
    queryFn: () =>
      getRoles({
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

  const roles = data?.data?.data ?? []

  return (
    <InputSelect
      options={roles}
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

InputSelectRole.displayName = 'InputSelectRole'
