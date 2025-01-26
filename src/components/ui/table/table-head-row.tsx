import React, { ReactNode } from 'react'

import { TableRow, TableRowProps } from '@mui/material'

interface TableHeadRowProps extends TableRowProps {
  children: ReactNode
  className?: string
}

export const TableHeadRow: React.FC<TableHeadRowProps> = ({
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <TableRow className={classes} {...props}>
        {children}
      </TableRow>
    </>
  )
}
