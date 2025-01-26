import React from 'react'

import {
  Backdrop as BackdropMui,
  BackdropProps as BackdropPropsMui,
} from '@mui/material'
import { cnBase } from 'tailwind-variants'

export interface BackdropProps extends BackdropPropsMui {}

export const Backdrop: React.FC<BackdropProps> = ({
  open = false,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <BackdropMui
        {...props}
        open={open}
        className={cnBase('bg-background -z-10', className)}
      >
        {children}
      </BackdropMui>
    </>
  )
}
