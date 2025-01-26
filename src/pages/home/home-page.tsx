import React from 'react'

import { useListPets } from '@/api/endpoints'
import { PageLayout } from '@/layouts/page-layout'

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useListPets()

  return (
    <>
      <PageLayout>
        <h1>Home Page</h1>
      </PageLayout>
    </>
  )
}

export default HomePage
