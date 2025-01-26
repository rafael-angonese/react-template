import React from 'react'

import { Pagination as PaginationComponent } from '@/components/ui/pagination/pagination'
import { useCompaniesFilters } from '@/pages/companies/list/hooks/use-companies-filters'
import { useListCompanies } from '@/pages/companies/list/hooks/use-list-companies'

export const Pagination: React.FC = () => {
  const { page, setPage } = useCompaniesFilters()
  const { data } = useListCompanies()

  const meta = data?.data?.meta

  return (
    <>
      <div className="flex justify-end my-6">
        <PaginationComponent
          page={page}
          count={meta?.last_page}
          onChange={(_, value) => setPage(value)}
        />
      </div>
    </>
  )
}
