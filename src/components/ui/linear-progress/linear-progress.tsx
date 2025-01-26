import React from 'react'

import {
  LinearProgress as MUILinearProgress,
  LinearProgressProps as MUILinearProgressProps,
} from '@mui/material'

export interface LinearProgressProps extends MUILinearProgressProps {
  isLoading: boolean
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  isLoading,
  ...props
}) => {
  return <>{isLoading && <MUILinearProgress {...props} />}</>
}
