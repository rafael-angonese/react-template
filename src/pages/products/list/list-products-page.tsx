import React from 'react'

import { useTitle } from '@/hooks/use-title'
import { PageLayout } from '@/layouts/page-layout'

import { Filters } from './filters'
import { Header } from './header'
import { Loading } from './loading'
import { Pagination } from './pagination'
import { ProductsList } from './products-list'

const ListProductsPage: React.FC = () => {
  useTitle('Produtos')

  return (
    <>
      <PageLayout>
        <Header />
        <Filters />
        <ProductsList />
        <Loading />
        <Pagination />
      </PageLayout>
    </>
  )
}

export default ListProductsPage
