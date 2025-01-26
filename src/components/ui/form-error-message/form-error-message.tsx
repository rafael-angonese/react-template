import React from 'react'

import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material'

interface FormErrorMessageProps extends MuiFormHelperTextProps {}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  ...props
}) => {
  return (
    <>
      <MuiFormHelperText error {...props} />
    </>
  )
}
