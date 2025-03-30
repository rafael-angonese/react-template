import React from 'react'

import { Pagination as PaginationComponent } from '@/components/ui/pagination/pagination'
import { useListProducts } from '@/pages/products/list/use-list-products'
import { useProductsFilters } from '@/pages/products/list/use-products-filters'

export const Pagination: React.FC = () => {
  const { page, setPage } = useProductsFilters()
  const { data } = useListProducts()

  const meta = data?.data?.meta

  return (
    <>
      <div className="flex justify-end my-6">
        <PaginationComponent
          page={page}
          count={meta?.lastPage}
          onChange={(_, value) => setPage(value)}
        />
      </div>
    </>
  )
}
