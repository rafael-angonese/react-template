import React, { ReactNode } from 'react'

import {
  TableHeadProps as MUITableHeadProps,
  TableHead as TableHeadMui,
} from '@mui/material'

interface TableHeadProps extends MUITableHeadProps {
  children: ReactNode
  className?: string
}

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  return (
    <>
      <TableHeadMui className={'bg-gray-50 dark:bg-slate-700'} {...props}>
        {children}
      </TableHeadMui>
    </>
  )
}
