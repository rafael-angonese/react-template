import React, { ComponentProps } from 'react'

import { cnBase } from 'tailwind-variants'

export interface GridProps extends ComponentProps<'div'> {}

export const Grid: React.FC<GridProps> = ({ className, ...props }) => {
  return (
    <>
      <div
        className={cnBase('grid grid-cols-12 gap-4', className)}
        {...props}
      />
    </>
  )
}
