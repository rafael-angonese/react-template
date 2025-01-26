import React, { ReactNode } from 'react'

import {
  TableBodyProps as MUITableBodyProps,
  TableBody as TableBodyMui,
} from '@mui/material'

interface TableBodyProps extends MUITableBodyProps {
  children: ReactNode
  className?: string
}

export const TableBody: React.FC<TableBodyProps> = ({
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <TableBodyMui className={classes} {...props}>
        {children}
      </TableBodyMui>
    </>
  )
}
