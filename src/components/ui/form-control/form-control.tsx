import React from 'react'

import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material'

interface FormControlProps extends MuiFormControlProps {}

export const FormControl: React.FC<FormControlProps> = ({
  fullWidth = true,
  ...props
}) => {
  return (
    <>
      <MuiFormControl fullWidth={fullWidth} {...props} />
    </>
  )
}
