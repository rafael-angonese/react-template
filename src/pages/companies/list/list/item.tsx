import React from 'react'

import { TableCell } from '@/components/ui/table/table-cell'
import { TableRow } from '@/components/ui/table/table-row'
import { Company } from '@/types/company'
import { formatDate } from '@/utils/format-date'

import { Actions } from './actions'

export interface ItemProps {
  company: Company
}

export const Item: React.FC<ItemProps> = ({ company }) => {
  const item = company

  return (
    <>
      <TableRow>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{formatDate(item.created_at)}</TableCell>
        <TableCell>
          <Actions company={item} />
        </TableCell>
      </TableRow>
    </>
  )
}
