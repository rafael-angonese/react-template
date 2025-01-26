import { Autocomplete, AutocompleteProps, TextField } from '@mui/material'

import { CircularProgress } from '@/components/ui/circular-progress/circular-progress'

export interface InputSelectProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput'
  > {
  placeholder?: string
}

export const InputSelect = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  multiple,
  placeholder = 'Selecione...',
  noOptionsText = 'Nenhum registro encontrado',
  loadingText = 'Carregando...',
  loading,
  ...props
}: InputSelectProps<T, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <Autocomplete
      multiple={multiple}
      disableCloseOnSelect={multiple}
      noOptionsText={noOptionsText}
      loadingText={loadingText}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      {...props}
    />
  )
}

InputSelect.displayName = 'InputSelect'
