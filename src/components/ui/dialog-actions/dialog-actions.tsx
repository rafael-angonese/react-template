import React from 'react'

import {
  DialogActions as DialogActionsMui,
  DialogActionsProps as DialogActionsPropsMui,
} from '@mui/material'

export interface DialogActionsProps extends DialogActionsPropsMui {}

export const DialogActions: React.FC<DialogActionsProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <DialogActionsMui {...props}>{children}</DialogActionsMui>
    </>
  )
}
