import React, { useState } from 'react'

import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { InputText } from '@/components/ui/input-text/input-text'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Link } from '@/components/ui/link/link'
import { recoverPassword } from '@/repositories/auth/recover-password'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { formLabels } from './form-config/form-labels'
import { FormValues } from './form-config/form-values'

export const Form: React.FC = () => {
  const methods = useFormContext<FormValues>()

  const [isSuccessfully, setIsSuccessfully] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods

  const onSubmit = async (values: FormValues) => {
    try {
      await recoverPassword({
        email: values.email,
      })
      setIsSuccessfully(true)
    } catch (error) {
      console.log(error)
      handlingRequestError(error, formLabels)
    }
  }

  return (
    <>
      {!isSuccessfully && (
        <div className="w-full flex flex-col justify-center items-center h-4/5">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Esqueceu a senha?
          </h1>

          <p className="mb-8 px-6 text-center">
            Não se preocupe! Insira seu e-mail abaixo para receber um link e
            resetar a sua senha.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 lg:w-1/3 px-6"
          >
            <FormControl error={!!errors.email}>
              <FormLabel required htmlFor="email">
                {formLabels.email}
              </FormLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputText
                    {...field}
                    type="email"
                    placeholder="exemplo@exemplo.com"
                  />
                )}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
            <CheckCircle size={60} className="text-green-500 font-extrabold" />
          </div>

          <h1 className="mt-8 text-2xl md:text-4xl font-bold mb-4 text-center">
            Acabamos de enviar um e-mail contendo informações para recuperação
            da sua senha!
          </h1>

          <p className="mb-8 px-6 text-center">
            Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta
            de spam.
          </p>

          <Link to="/" className="text-primary text-xl flex items-center">
            <ArrowLeft size={22} className="mr-2" />
            Voltar para página inicial.
          </Link>
        </div>
      )}
    </>
  )
}
