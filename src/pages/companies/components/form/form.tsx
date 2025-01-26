import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'

import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { InputText } from '@/components/ui/input-text/input-text'

import { formLabels } from './form-config/form-labels'
import { FormValues } from './form-config/form-values'
import { SubmitButton } from './submit-button'

export const Form: React.FC = () => {
  const methods = useFormContext<FormValues>()

  const {
    control,
    formState: { errors },
  } = methods

  return (
    <>
      <Grid>
        <GridItem>
          <FormControl error={!!errors.name}>
            <FormLabel required htmlFor="name">
              {formLabels.name}
            </FormLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputText {...field} placeholder={formLabels.name} />
              )}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        </GridItem>
      </Grid>

      <SubmitButton />
    </>
  )
}
