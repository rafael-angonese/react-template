import React from 'react'

import { TableHead } from '@/components/ui/table/table-head'
import { TableHeadCell } from '@/components/ui/table/table-head-cell'
import { TableHeadRow } from '@/components/ui/table/table-head-row'

export const Columns: React.FC = () => {
  return (
    <>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Código</TableHeadCell>
          <TableHeadCell>Nome</TableHeadCell>
          <TableHeadCell>Preço</TableHeadCell>
          <TableHeadCell>Criado em</TableHeadCell>
        </TableHeadRow>
      </TableHead>
    </>
  )
}
