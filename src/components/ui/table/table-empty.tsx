import React from 'react'

import { TableCell } from '@/components/ui/table/table-cell'
import { TableRow } from '@/components/ui/table/table-row'

interface TableEmptyProps {
  isEmpty?: boolean
  text?: string
}

export const TableEmpty: React.FC<TableEmptyProps> = ({
  isEmpty = false,
  text = 'Sem dados',
}) => {
  return (
    <>
      {isEmpty && (
        <TableRow>
          <TableCell align="center" colSpan={99}>
            {text}
          </TableCell>
        </TableRow>
      )}
    </>
  )
}
