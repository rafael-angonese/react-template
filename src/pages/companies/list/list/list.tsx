import React from 'react'

import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Table } from '@/components/ui/table/table'
import { TableBody } from '@/components/ui/table/table-body'
import { TableEmpty } from '@/components/ui/table/table-empty'
import { TableHead } from '@/components/ui/table/table-head'
import { TableHeadCell } from '@/components/ui/table/table-head-cell'
import { TableHeadRow } from '@/components/ui/table/table-head-row'
import { useListCompanies } from '@/pages/companies/list/hooks/use-list-companies'
import isBlank from '@/utils/is-blank'

import { Item } from './item'

export const List: React.FC = () => {
  const { data, isPending } = useListCompanies()

  const companies = data?.data?.data ?? []

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Código</TableHeadCell>
              <TableHeadCell>Nome</TableHeadCell>
              <TableHeadCell>Atualizado em</TableHeadCell>
              <TableHeadCell />
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableEmpty isEmpty={isBlank(companies)} />
            {companies.map((item) => (
              <Item key={item.id} company={item} />
            ))}
          </TableBody>
        </Table>
      </div>

      <LinearProgress isLoading={isPending} />
    </>
  )
}
