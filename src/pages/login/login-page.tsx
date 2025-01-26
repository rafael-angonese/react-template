import React, { useState } from 'react'

import { IconButton } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import { Controller, FormProvider } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Logo } from '@/components/logo/logo'
import { Button } from '@/components/ui/button/button'
import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { InputText } from '@/components/ui/input-text/input-text'
import { useTitle } from '@/hooks/use-title'
import { useLoginForm } from '@/pages/login/use-login-form'
import { login } from '@/repositories/auth/login'
import { useAuthStore } from '@/store/use-auth-store'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { FormValues } from './form-config/form-values'

const LoginPage: React.FC = () => {
  useTitle('Login')

  const { state } = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const { setAuth } = useAuthStore()
  const navigate = useNavigate()

  const methods = useLoginForm()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)
      const { data } = await login({
        email: values.email,
        password: values.password,
      })

      setAuth({
        token: data.token,
        refreshToken: data.refreshToken,
      })
      navigate(state?.path && state.path !== '/login' ? state.path : '/')
    } catch (error) {
      handlingRequestError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 w-full"
      >
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-10 w-96">
            <Logo className="h-36" />

            <div className="flex flex-col gap-5 w-full">
              <FormControl disabled={isLoading} error={!!errors.email}>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <InputText {...field} placeholder="email" />
                  )}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl disabled={isLoading} error={!!errors.password}>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      type={isShowPassword ? 'text' : 'password'}
                      placeholder="password"
                      endAdornment={
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={() => setIsShowPassword(!isShowPassword)}
                          edge="end"
                        >
                          {isShowPassword ? <EyeOff /> : <Eye />}
                        </IconButton>
                      }
                    />
                  )}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <div>
                <Button
                  type="submit"
                  variant="solid"
                  size="lg"
                  disabled={isLoading}
                  className="w-full"
                  color="primary"
                >
                  Entrar
                </Button>
              </div>
            </div>

            <Link to="/recovery-password" className="text-sm text-primary">
              Esqueceu sua senha?
            </Link>

            <Button
              variant="outlined"
              color="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              CADASTRE-SE
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default LoginPage
