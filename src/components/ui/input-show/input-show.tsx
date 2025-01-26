import React from 'react'

import { Input, InputProps } from '@mui/material'
import { cnBase } from 'tailwind-variants'

interface InputShowProps extends InputProps {}

export const InputShow: React.FC<InputShowProps> = ({
  value,
  className,
  ...props
}) => {
  return (
    <>
      <Input
        {...props}
        readOnly
        fullWidth
        className={cnBase(className)}
        value={value || ''}
      />
    </>
  )
}
