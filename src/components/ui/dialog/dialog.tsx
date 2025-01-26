import React from 'react'

import {
  Dialog as DialogMui,
  DialogProps as DialogPropsMui,
} from '@mui/material'
import { cnBase } from 'tailwind-variants'

import { Backdrop, BackdropProps } from '@/components/ui/backdrop/backdrop'

export interface DialogProps extends DialogPropsMui {
  BackdropProps?: Omit<BackdropProps, 'open'>
}

export const Dialog: React.FC<DialogProps> = ({
  open = false,
  onClose,
  BackdropProps,
  PaperProps,
  ...props
}) => {
  return (
    <>
      <Backdrop {...BackdropProps} open={open}>
        <DialogMui
          PaperProps={{
            ...PaperProps,
            className: cnBase('bg-background bg-none', PaperProps?.className),
          }}
          open={open}
          onClose={onClose}
          {...props}
        />
      </Backdrop>
    </>
  )
}
