import React from 'react'

import { FormProvider } from 'react-hook-form'

import { Heading } from '@/components/ui/heading/heading'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'

import { Form } from './form/form'
import { useCreateUserForm } from './form/use-create-user-form'

const NewUserPage: React.FC = () => {
  useTitle('Novo Usuário')
  const methods = useCreateUserForm()

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Novo Usuário</Heading>
        </div>

        <div>
          <FormProvider {...methods}>
            <Form />
          </FormProvider>
        </div>
      </PageLayout>
    </>
  )
}

export default NewUserPage
