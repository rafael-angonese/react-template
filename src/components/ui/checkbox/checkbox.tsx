import React from 'react'

import {
  Checkbox as CheckboxMui,
  CheckboxProps,
  FormControlLabel,
} from '@mui/material'

interface CheckboxControlledProps extends CheckboxProps {
  label?: string
}

export const Checkbox: React.FC<CheckboxControlledProps> = ({
  label,
  ...props
}) => {
  return (
    <>
      <FormControlLabel control={<CheckboxMui {...props} />} label={label} />
    </>
  )
}
