import React, { ReactNode } from 'react'

import {
  TableCellProps as MUITableCellProps,
  TableCell as TableCellMui,
} from '@mui/material'

interface TableCellProps extends MUITableCellProps {
  children?: ReactNode
  className?: string
}

export const TableCell: React.FC<TableCellProps> = ({
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <TableCellMui className={classes} {...props}>
        {children}
      </TableCellMui>
    </>
  )
}
