import React from 'react'


import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { InputShow } from '@/components/ui/input-show/input-show'
import { useGetCompany } from '@/pages/companies/hooks/use-get-company'
import { formatDate } from '@/utils/format-date'

export const Info: React.FC = () => {
  const { data } = useGetCompany()

  const user = data?.data ?? null

  if (!user) return null

  return (
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
          <FormLabel>Criado em</FormLabel>
          <InputShow value={formatDate(user.created_at)} />
        </GridItem>

        <GridItem>
          <FormLabel>Atualizado em</FormLabel>
          <InputShow value={formatDate(user.updated_at)} />
        </GridItem>
      </Grid>
    </>
  )
}
