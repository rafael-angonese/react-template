import React from 'react'

import {
  Tooltip as TooltipMui,
  TooltipProps as TooltipPropsMui,
} from '@mui/material'

interface TooltipProps extends TooltipPropsMui {}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <TooltipMui {...props} title={title}>
      {children}
    </TooltipMui>
  )
}
