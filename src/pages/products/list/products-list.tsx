import React from 'react'

import { Table } from '@/components/ui/table/table'
import { TableBody } from '@/components/ui/table/table-body'
import { TableEmpty } from '@/components/ui/table/table-empty'
import { ProductItem } from '@/pages/products/list/product-item'
import { useListProducts } from '@/pages/products/list/use-list-products'
import isBlank from '@/utils/is-blank'

import { Columns } from './columns'

export const ProductsList: React.FC = () => {
  const { data } = useListProducts()

  const products = data?.data?.data ?? []

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <Columns />
          <TableBody>
            <TableEmpty isEmpty={isBlank(products)} />
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
