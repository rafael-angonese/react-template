import React, { useEffect } from 'react'

import { FormProvider } from 'react-hook-form'

import { Heading } from '@/components/ui/heading/heading'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'
import { useCompanyForm } from '@/pages/companies/components/form/use-company-form'
import { useGetCompany } from '@/pages/companies/hooks/use-get-company'

import { EditForm } from './edit-form'

const EditCompanyPage: React.FC = () => {
  useTitle('Editando Empresa')

  const { data, isPending } = useGetCompany()

  const company = data?.data ?? null

  const methods = useCompanyForm()

  useEffect(() => {
    if (company) {
      methods.reset({
        name: company.name,
      })
    }
  }, [company, methods])

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Editando Empresa</Heading>
        </div>

        <LinearProgress isLoading={isPending} />
        <FormProvider {...methods}>
          <EditForm />
        </FormProvider>
      </PageLayout>
    </>
  )
}

export default EditCompanyPage
