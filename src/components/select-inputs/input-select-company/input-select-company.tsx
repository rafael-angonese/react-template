import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import {
  InputSelect,
  InputSelectProps,
} from '@/components/ui/input-select/input-select'
import { queryKeys } from '@/constants/react-query-keys'
import { useDebounce } from '@/hooks/use-debounce'
import { getCompanies } from '@/repositories/companies/get-companies'
import { Company } from '@/types/company'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export interface InputSelectCompanyProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
> extends Omit<
    InputSelectProps<Company, Multiple, DisableClearable, false>,
    'options'
  > {}

export const InputSelectCompany = <
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
>({
  ...props
}: InputSelectCompanyProps<Multiple, DisableClearable>) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const debouncedInputValue = useDebounce(inputValue)

  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.companies, { name: debouncedInputValue }],
    queryFn: () =>
      getCompanies({
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

  const companies = data?.data?.data ?? []

  return (
    <InputSelect
      options={companies}
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

InputSelectCompany.displayName = 'InputSelectCompany'
