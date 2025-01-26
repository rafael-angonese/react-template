import React from 'react'

import { FormControlLabel, Radio as RadioMui, RadioProps } from '@mui/material'

interface RadioControlledProps extends RadioProps {
  label?: string
}

export const Radio: React.FC<RadioControlledProps> = ({ label, ...props }) => {
  return (
    <>
      <FormControlLabel control={<RadioMui {...props} />} label={label} />
    </>
  )
}
