import React, { ReactNode } from 'react'

import {
  TableRowProps as MUITableRowProps,
  TableRow as TableRowMui,
} from '@mui/material'

interface TableRowProps extends MUITableRowProps {
  children: ReactNode
  className?: string
}

export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return (
    <>
      <TableRowMui
        className={
          'bg-white dark:bg-slate-800 dark:hover:bg-slate-800/50 hover:bg-background'
        }
        {...props}
      >
        {children}
      </TableRowMui>
    </>
  )
}
