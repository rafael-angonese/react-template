import React from 'react'

import {
  Collapse as CollapseMui,
  CollapseProps as CollapsePropsMui,
} from '@mui/material'

interface CollapseProps extends CollapsePropsMui {}

export const Collapse: React.FC<CollapseProps> = ({
  in: isExpanded = false,
  timeout = 'auto',
  unmountOnExit = true,
  children,
  ...props
}) => {
  return (
    <CollapseMui
      in={isExpanded}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
      {...props}
    >
      {children}
    </CollapseMui>
  )
}
