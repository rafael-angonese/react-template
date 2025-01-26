import React from 'react'

import { useNavigate } from 'react-router-dom'

import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'
import { DeleteCompanyModal } from '@/pages/companies/components/delete/delete-company-modal'
import { useGetCompany } from '@/pages/companies/hooks/use-get-company'

import { Header } from './header/header'
import { Info } from './info/info'

const ShowCompanyPage: React.FC = () => {
  useTitle('Visualizando Empresa')
  const navigate = useNavigate()

  const { isPending } = useGetCompany()

  return (
    <>
      <PageLayout>
        <Header />
        <LinearProgress isLoading={isPending} />
        <Info />
      </PageLayout>

      <DeleteCompanyModal
        onDeleteSuccess={() => {
          navigate('/companies')
        }}
      />
    </>
  )
}

export default ShowCompanyPage
