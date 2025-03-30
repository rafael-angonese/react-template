import React from 'react'

import { TableCell } from '@/components/ui/table/table-cell'
import { TableRow } from '@/components/ui/table/table-row'
import { Product } from '@/types/product'
import { formatCurrency } from '@/utils/format-currency'
import { formatDate } from '@/utils/format-date'

export interface ProductItemProps {
  product: Product
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <>
      <TableRow>
        <TableCell>{product.id}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{formatCurrency(product.price)}</TableCell>
        <TableCell>{formatDate(product.createdAt)}</TableCell>
      </TableRow>
    </>
  )
}
