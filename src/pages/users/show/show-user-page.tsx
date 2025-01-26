import React from 'react'

import { Eye, Pencil, Trash } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button/button'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { Heading } from '@/components/ui/heading/heading'
import { InputShow } from '@/components/ui/input-show/input-show'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Link } from '@/components/ui/link/link'
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
import { useGetUser } from '@/pages/users/use-get-user'
import { formatDate } from '@/utils/format-date'
import isBlank from '@/utils/is-blank'
const ShowUserPage: React.FC = () => {
  useTitle('Visualizando Usuário')
  const navigate = useNavigate()

  const { data, isPending } = useGetUser()
  const { setId, setIsModalOpen } = useDeleteUser()

  const user = data?.data ?? null

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Visualizando Usuário</Heading>

          <div className="flex gap-2">
            <Button variant="solid" color="warning" asChild>
              <Link to={`/users/edit/${user?.id}`} className="gap-1">
                <Pencil size={18} />
                Editar
              </Link>
            </Button>

            <Button
              variant="solid"
              color="error"
              onClick={() => {
                setId(user!.id)
                setIsModalOpen(true)
              }}
            >
              <Trash size={18} className="cursor-pointer mr-1" />
              Excluir
            </Button>
          </div>
        </div>

        <LinearProgress isLoading={isPending} />

        {user && (
          <>
            <Grid>
              <GridItem>
                <FormLabel>Código</FormLabel>
                <InputShow value={user.id} />
              </GridItem>

              <GridItem>
                <FormLabel>Nome</FormLabel>
                <InputShow value={user.name} />
              </GridItem>

              <GridItem>
                <FormLabel>E-mail</FormLabel>
                <InputShow value={user.email} />
              </GridItem>

              <GridItem>
                <FormLabel>Status</FormLabel>
                <InputShow value={StatusMap[user.status]} />
              </GridItem>

              <GridItem>
                <FormLabel>Criado em</FormLabel>
                <InputShow value={formatDate(user.created_at)} />
              </GridItem>

              <GridItem>
                <FormLabel>Atualizado em</FormLabel>
                <InputShow value={formatDate(user.updated_at)} />
              </GridItem>
            </Grid>

            <Heading className="mt-8 mb-2">Empresas</Heading>
            <div className="rounded-md border">
              <Table size="small">
                <TableHead>
                  <TableHeadRow>
                    <TableHeadCell>Código</TableHeadCell>
                    <TableHeadCell>Nome</TableHeadCell>
                    <TableHeadCell />
                  </TableHeadRow>
                </TableHead>
                <TableBody>
                  <TableEmpty isEmpty={isBlank(user.companies)} />
                  {user.companies.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <Link to={`/companies/show/${item.id}`}>
                          <Tooltip title="Visualizar empresa">
                            <Eye size={18} className="text-success" />
                          </Tooltip>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Heading className="mt-8 mb-2">Permissões</Heading>
            <div className="rounded-md border">
              <Table size="small">
                <TableHead>
                  <TableHeadRow>
                    <TableHeadCell>Código</TableHeadCell>
                    <TableHeadCell>Nome</TableHeadCell>

                    <TableHeadCell />
                  </TableHeadRow>
                </TableHead>
                <TableBody>
                  <TableEmpty isEmpty={isBlank(user.roles)} />
                  {user.roles.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <Link to={`/roles/show/${item.id}`}>
                          <Tooltip title="Visualizar permissão">
                            <Eye size={18} className="text-success" />
                          </Tooltip>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </PageLayout>

      <DeleteUserModal
        onDeleteSuccess={() => {
          navigate('/users')
        }}
      />
    </>
  )
}

export default ShowUserPage
