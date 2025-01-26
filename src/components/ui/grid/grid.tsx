import React from 'react'

import { Grid as MUIGrid, GridProps as MUIGridProps } from '@mui/material'

export interface GridProps extends MUIGridProps {}

export const Grid: React.FC<GridProps> = ({ spacing = 1, ...props }) => {
  return (
    <>
      <MUIGrid container spacing={spacing} {...props} />
    </>
  )
}
