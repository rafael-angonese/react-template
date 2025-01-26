import React from 'react'

import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material'

interface FormHelperTextProps extends MuiFormHelperTextProps {}

export const FormHelperText: React.FC<FormHelperTextProps> = ({ ...props }) => {
  return (
    <>
      <MuiFormHelperText {...props} />
    </>
  )
}
