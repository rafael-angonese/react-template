import React from 'react'

import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { useListProducts } from '@/pages/products/list/use-list-products'

export const Loading: React.FC = () => {
  const { isFetching } = useListProducts()

  return (
    <>
      <LinearProgress isLoading={isFetching} />
    </>
  )
}
