import React from 'react'

import { FormProvider } from 'react-hook-form'

import { Form } from '@/pages/recovery-password/form/form'
import { useRecoveryPasswordForm } from '@/pages/recovery-password/form/use-recovery-password-form'

const RecoveryPasswordPage: React.FC = () => {
  const methods = useRecoveryPasswordForm()

  return (
    <>
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </>
  )
}

export default RecoveryPasswordPage
