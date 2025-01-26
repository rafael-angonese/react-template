import React from 'react'

import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'
import { DeleteCompanyModal } from '@/pages/companies/components/delete/delete-company-modal'

import { Filters } from './filters/filters'
import { Header } from './header/header'
import { List } from './list/list'
import { Pagination } from './pagination/pagination'

const ListCompaniesPage: React.FC = () => {
  useTitle('Empresas')

  return (
    <>
      <PageLayout>
        <Header />
        <Filters />
        <List />
        <Pagination />
      </PageLayout>

      <DeleteCompanyModal />
    </>
  )
}

export default ListCompaniesPage
