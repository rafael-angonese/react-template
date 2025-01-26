import React, { ReactNode } from 'react'

import { TableCell, TableCellProps } from '@mui/material'

interface TableHeadCellProps extends TableCellProps {
  children?: ReactNode
  className?: string
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <TableCell className={'font-semibold'} {...props}>
        {children}
      </TableCell>
    </>
  )
}
