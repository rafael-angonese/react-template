import { forwardRef } from 'react'

import { OutlinedInput, OutlinedInputProps } from '@mui/material'
import { cnBase } from 'tailwind-variants'

export interface InputTextProps extends OutlinedInputProps {}
export const InputText = forwardRef(
  ({ className, ...props }: InputTextProps, ref) => {
    return (
      <OutlinedInput
        inputRef={ref}
        fullWidth
        className={cnBase(className)}
        {...props}
      />
    )
  },
)

InputText.displayName = 'InputText'
