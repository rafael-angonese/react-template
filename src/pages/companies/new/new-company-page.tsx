import React from 'react'

import { FormProvider } from 'react-hook-form'

import { Heading } from '@/components/ui/heading/heading'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'

import { NewForm } from './new-form'

import { useCompanyForm } from '../components/form/use-company-form'

const NewCompanyPage: React.FC = () => {
  useTitle('Nova Empresa')

  const methods = useCompanyForm()

  return (
    <>
      <PageLayout>
        <div className="flex justify-between mb-4">
          <Heading>Nova Empresa</Heading>
        </div>

        <div>
          <FormProvider {...methods}>
            <NewForm />
          </FormProvider>
        </div>
      </PageLayout>
    </>
  )
}

export default NewCompanyPage
