import React from 'react'

import { ArrowLeft } from 'lucide-react'
import { FormProvider } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'

import { Form } from './form/form'
import { useResetPasswordForm } from './form/use-recovery-password-form'

const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token')
  const id = searchParams.get('id')

  const methods = useResetPasswordForm()

  return (
    <>
      {!token && !id && (
        <div className="w-full flex flex-col justify-center items-center h-4/5">
          <h1 className="mt-8 text-error text-2xl md:text-4xl font-bold mb-4 text-center">
            Esse link para redefinir a senha não existe ou expirou!
          </h1>

          <Link to="/" className="text-primary text-xl flex items-center">
            <ArrowLeft size={22} className="mr-2" />
            Voltar para página inicial.
          </Link>
        </div>
      )}

      {token && id && (
        <FormProvider {...methods}>
          <Form />
        </FormProvider>
      )}
    </>
  )
}

export default ResetPasswordPage
