import React, { useEffect } from 'react'

import { FormProvider } from 'react-hook-form'

import { Heading } from '@/components/ui/heading/heading'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'
import { useGetUser } from '@/pages/users/use-get-user'

import { Form } from './form/form'
import { useUpdateUserForm } from './form/use-update-user-form'

const EditUserPage: React.FC = () => {
  useTitle('Editando Usuário')
  const methods = useUpdateUserForm()

  const { data, isPending } = useGetUser()

  const user = data?.data ?? null

  const { reset } = methods

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        companiesIds: user.companies,
        roleIds: user.roles,
      })
    }
  }, [user, reset])

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Editando Usuário</Heading>
        </div>

        <LinearProgress isLoading={isPending} />

        {user && (
          <>
            <FormProvider {...methods}>
              <Form />
            </FormProvider>
          </>
        )}
      </PageLayout>
    </>
  )
}

export default EditUserPage
