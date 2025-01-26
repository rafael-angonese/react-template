import React, { useState } from 'react'

import { InputAdornment } from '@mui/material'
import { ArrowRight, CheckCircle, Eye, EyeOff } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { PasswordCheckList } from '@/components/password-check-list/password-check-list'
import { Button } from '@/components/ui/button/button'
import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { InputText } from '@/components/ui/input-text/input-text'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Link } from '@/components/ui/link/link'
import { resetPassword } from '@/repositories/auth/reset-password'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { formLabels } from './form-config/form-labels'
import { FormValues } from './form-config/form-values'

export const Form: React.FC = () => {
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token')
  const id = searchParams.get('id')

  const methods = useFormContext<FormValues>()

  const [isSuccessfully, setIsSuccessfully] = useState(false)

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
      await resetPassword({
        id: id!,
        recoveryToken: token!,
        password: values.password,
      })
      setIsSuccessfully(true)
    } catch (error) {
      handlingRequestError(error, formLabels)
    }
  }

  return (
    <>
      {!isSuccessfully && (
        <div className="w-full flex flex-col justify-center items-center h-4/5">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Redefina sua senha!
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 lg:w-1/3 px-6"
          >
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
              <PasswordCheckList password={password || ''} />
            </FormControl>

            <FormControl className="mt-4" error={!!errors.confirmPassword}>
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

            <LinearProgress isLoading={isSubmitting} />

            <Button
              type="submit"
              size="xl"
              className="mt-8 w-full"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Redefinir senha
            </Button>
          </form>
        </div>
      )}

      {isSuccessfully && (
        <div className="w-full flex flex-col justify-center items-center h-4/5">
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-10" />
            <CheckCircle className="text-green-500 font-extrabold text-9xl" />
          </div>

          <h1 className="mt-8 text-2xl md:text-4xl font-bold mb-4 text-center">
            Senha redefinida com sucesso!
          </h1>

          <Link to="/login" className="text-primary text-xl flex items-center">
            Acessar a plataforma
            <ArrowRight size={22} className="ml-2" />
          </Link>
        </div>
      )}
    </>
  )
}
