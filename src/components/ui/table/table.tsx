import * as React from 'react'

import { TableProps as MUITableProps, Table as TableMui } from '@mui/material'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'

interface TableProps extends MUITableProps {
  children: React.ReactNode
  className?: string
  classNameContainer?: string
}

export const Table: React.FC<TableProps> = ({
  className: classes,
  // classNameContainer,
  children,
  ...props
}) => {
  return (
    <>
      <TableContainer component={Paper} className={'bg-transparent'}>
        <TableMui className={classes} {...props}>
          {children}
        </TableMui>
      </TableContainer>
    </>
  )
}
