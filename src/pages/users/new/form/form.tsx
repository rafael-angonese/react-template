import React, { useState } from 'react'

import { InputAdornment } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { Eye, EyeOff } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PasswordCheckList } from '@/components/password-check-list/password-check-list'
import { InputSelectCompany } from '@/components/select-inputs/input-select-company/input-select-company'
import { InputSelectRole } from '@/components/select-inputs/input-select-role/input-select-role'
import { Button } from '@/components/ui/button/button'
import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { InputText } from '@/components/ui/input-text/input-text'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { queryKeys } from '@/constants/react-query-keys'
import { createUser } from '@/repositories/users/create-user'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { formLabels } from './form-config/form-labels'
import { FormValues } from './form-config/form-values'

export const Form: React.FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const methods = useFormContext<FormValues>()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = methods

  const password = watch('password')

  const onSubmit = async (values: FormValues) => {
    try {
      const { data } = await createUser({
        name: values.name,
        email: values.email,
        password: values.password,
        companiesIds: values.companiesIds.map((company) => company.id),
        roleIds: values.roleIds.map((role) => role.id),
      })

      toast.success('Usuário criado com sucesso!')

      queryClient.invalidateQueries({ queryKey: [queryKeys.users] })
      navigate(`/users/show/${data.id}`)
    } catch (error) {
      handlingRequestError(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <GridItem>
            <FormControl error={!!errors.email}>
              <FormLabel required htmlFor="email">
                {formLabels.email}
              </FormLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputText {...field} placeholder={formLabels.email} />
                )}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl error={!!errors.companiesIds}>
              <FormLabel required htmlFor="companiesIds">
                {formLabels.companiesIds}
              </FormLabel>
              <Controller
                name="companiesIds"
                control={control}
                render={({ field }) => (
                  <InputSelectCompany
                    multiple
                    value={field.value}
                    onChange={(_, value) => field.onChange(value)}
                    placeholder={formLabels.companiesIds}
                  />
                )}
              />
              <FormErrorMessage>
                {errors.companiesIds?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl error={!!errors.roleIds}>
              <FormLabel required htmlFor="roleIds">
                {formLabels.roleIds}
              </FormLabel>
              <Controller
                name="roleIds"
                control={control}
                render={({ field }) => (
                  <InputSelectRole
                    multiple
                    value={field.value}
                    onChange={(_, value) => field.onChange(value)}
                    placeholder={formLabels.roleIds}
                  />
                )}
              />
              <FormErrorMessage>{errors.roleIds?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl error={!!errors.password}>
              <FormLabel required htmlFor="password">
                {formLabels.password}
              </FormLabel>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputText
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={formLabels.password}
                    endAdornment={
                      <InputAdornment position="end">
                        {showPassword ? (
                          <EyeOff
                            color="grey"
                            className="cursor-pointer"
                            size={22}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <Eye
                            color="grey"
                            className="cursor-pointer"
                            size={22}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </InputAdornment>
                    }
                  />
                )}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <PasswordCheckList password={password} />
          </GridItem>

          <GridItem>
            <FormControl error={!!errors.confirmPassword}>
              <FormLabel required htmlFor="confirmPassword">
                {formLabels.confirmPassword}
              </FormLabel>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <InputText
                    {...field}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder={formLabels.confirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        {showConfirmPassword ? (
                          <EyeOff
                            color="grey"
                            className="cursor-pointer"
                            size={22}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          />
                        ) : (
                          <Eye
                            color="grey"
                            className="cursor-pointer"
                            size={22}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          />
                        )}
                      </InputAdornment>
                    }
                  />
                )}
              />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
        <LinearProgress isLoading={isSubmitting} />

        <div className="flex justify-end mt-4">
          <Button
            disabled={isSubmitting}
            variant="solid"
            color="success"
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
    </>
  )
}
