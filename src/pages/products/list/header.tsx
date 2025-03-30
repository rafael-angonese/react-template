import React from 'react'

import { Heading } from '@/components/ui/heading/heading'

export const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Produtos</Heading>
      </div>
    </>
  )
}
