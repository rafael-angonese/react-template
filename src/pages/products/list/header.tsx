import React from 'react'

import { Button } from '@/components/ui/button/button'
import { Heading } from '@/components/ui/heading/heading'
import { useNewProduct } from '@/pages/products/new/use-new-product'

export const Header: React.FC = () => {
  const { setIsModalOpen } = useNewProduct()
  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Produtos</Heading>

        <Button
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Novo
        </Button>
      </div>
    </>
  )
}
