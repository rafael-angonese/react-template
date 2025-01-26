import React from 'react'

import {
  CircularProgress as MUICircularProgress,
  CircularProgressProps as MUICircularProgressProps,
} from '@mui/material'

export interface CircularProgressProps extends MUICircularProgressProps {}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  return (
    <>
      <MUICircularProgress {...props} />
    </>
  )
}
