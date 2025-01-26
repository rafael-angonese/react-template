import React from 'react'

import { Grid as MUIGrid, GridProps as MUIGridProps } from '@mui/material'

export interface GridItemProps extends MUIGridProps {}

export const GridItem: React.FC<GridItemProps> = ({
  xs = 12,
  sm = 6,
  md = 6,
  lg = 3,
  xl = 3,
  ...props
}) => {
  return (
    <>
      <MUIGrid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props} />
    </>
  )
}
