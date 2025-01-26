import React from 'react'

import {
  DialogContent as DialogContentMui,
  DialogContentProps as DialogContentPropsMui,
} from '@mui/material'

export interface DialogContentProps extends DialogContentPropsMui {}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <DialogContentMui {...props}>{children}</DialogContentMui>
    </>
  )
}
