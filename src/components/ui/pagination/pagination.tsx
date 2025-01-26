import React from 'react'

import {
  Pagination as MUIPagination,
  PaginationProps as MUIPaginationProps,
} from '@mui/material'

interface PaginationProps extends MUIPaginationProps {}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <>
      <MUIPagination {...props} />
    </>
  )
}
Pagination.displayName = 'Pagination'
