import React from 'react'

import { Eye, Pencil, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button/button'
import { Heading } from '@/components/ui/heading/heading'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Link } from '@/components/ui/link/link'
import { Pagination } from '@/components/ui/pagination/pagination'
import { Table } from '@/components/ui/table/table'
import { TableBody } from '@/components/ui/table/table-body'
import { TableCell } from '@/components/ui/table/table-cell'
import { TableEmpty } from '@/components/ui/table/table-empty'
import { TableHead } from '@/components/ui/table/table-head'
import { TableHeadCell } from '@/components/ui/table/table-head-cell'
import { TableHeadRow } from '@/components/ui/table/table-head-row'
import { TableRow } from '@/components/ui/table/table-row'
import { Tooltip } from '@/components/ui/tooltip/tooltip'
import { StatusMap } from '@/constants/status'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'
import { DeleteUserModal } from '@/pages/users/delete-user-modal/delete-user-modal'
import { useDeleteUser } from '@/pages/users/delete-user-modal/use-delete-user'
import { useListUsers } from '@/pages/users/list/use-list-users'
import { useUsersFilters } from '@/pages/users/list/use-users-filters'
import { formatDate } from '@/utils/format-date'
import isBlank from '@/utils/is-blank'

import { Filters } from './filters/filters'

const ListUsersPage: React.FC = () => {
  useTitle('Usuários')

  const { page, setPage } = useUsersFilters()
  const { data, isPending } = useListUsers()
  const { setId, setIsModalOpen } = useDeleteUser()

  const users = data?.data?.data ?? []
  const meta = data?.data?.meta

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Usuários</Heading>

          <Button variant="solid" color="success" asChild>
            <Link to="/users/new">Novo</Link>
          </Button>
        </div>

        <Filters />

        <div className="rounded-md border">
          <Table>
            <TableHead>
              <TableHeadRow>
                <TableHeadCell>Código</TableHeadCell>
                <TableHeadCell>Nome</TableHeadCell>
                <TableHeadCell>E-mail</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Atualizado em</TableHeadCell>
                <TableHeadCell />
              </TableHeadRow>
            </TableHead>
            <TableBody>
              <TableEmpty isEmpty={isBlank(users)} />
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{StatusMap[item.status]}</TableCell>
                  <TableCell>{formatDate(item.created_at)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link to={`/users/show/${item.id}`}>
                        <Tooltip title="Visualizar usuário">
                          <Eye size={18} className="text-success" />
                        </Tooltip>
                      </Link>

                      <Link to={`/users/edit/${item.id}`}>
                        <Tooltip title="Editar usuário">
                          <Pencil size={18} className="text-warning" />
                        </Tooltip>
                      </Link>

                      <Tooltip title="Excluir usuário">
                        <Trash
                          size={18}
                          className="text-error cursor-pointer"
                          onClick={() => {
                            setId(item.id)
                            setIsModalOpen(true)
                          }}
                        />
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <LinearProgress isLoading={isPending} />

        <div className="flex justify-end my-6">
          <Pagination
            page={page}
            count={meta?.last_page}
            onChange={(_, value) => setPage(value)}
          />
        </div>
      </PageLayout>

      <DeleteUserModal />
    </>
  )
}

export default ListUsersPage
