import React from 'react'

import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { InputText } from '@/components/ui/input-text/input-text'
import { useUsersFilters } from '@/pages/users/list/use-users-filters'

export const Filters: React.FC = () => {
  const { id, setId, name, setName } = useUsersFilters()

  return (
    <>
      <Grid className="mb-4">
        <GridItem>
          <FormLabel>Código</FormLabel>
          <InputText
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder={'Digite o Código'}
          />
        </GridItem>

        <GridItem>
          <FormLabel>Nome</FormLabel>
          <InputText
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={'Digite o nome'}
          />
        </GridItem>
      </Grid>
    </>
  )
}
