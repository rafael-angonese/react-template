import React from 'react'

import { RadioGroup as RadioGroupMui, RadioGroupProps } from '@mui/material'

interface RadioGroupControlledProps extends RadioGroupProps {}

export const RadioGroup: React.FC<RadioGroupControlledProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <RadioGroupMui {...props}>{children}</RadioGroupMui>
    </>
  )
}
