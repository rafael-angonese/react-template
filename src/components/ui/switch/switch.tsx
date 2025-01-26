import React from 'react'

import {
  FormControlLabel,
  Switch as SwitchMui,
  SwitchProps,
} from '@mui/material'

// import IOSSwitch from './iosswitch'

interface SwitchControlledProps extends SwitchProps {
  label?: string
}

export const Switch: React.FC<SwitchControlledProps> = ({
  label,
  ...props
}) => {
  return (
    <>
      <FormControlLabel control={<SwitchMui {...props} />} label={label} />
    </>
  )
}
