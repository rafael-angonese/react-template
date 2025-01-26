import React from 'react'

import {
  Divider as DividerMui,
  DividerProps as DividerPropsMui,
} from '@mui/material'

interface DividerProps extends DividerPropsMui {}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  children,
  ...props
}) => {
  return (
    <DividerMui orientation={orientation} {...props}>
      {children}
    </DividerMui>
  )
}
