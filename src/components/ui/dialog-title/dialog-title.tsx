import React from 'react'

import {
  DialogTitle as DialogTitleMui,
  DialogTitleProps as DialogTitlePropsMui,
} from '@mui/material'

export interface DialogTitleProps extends DialogTitlePropsMui {}

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <DialogTitleMui {...props}>{children}</DialogTitleMui>
    </>
  )
}
