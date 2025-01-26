import React, { ComponentProps } from 'react'

import { cnBase } from 'tailwind-variants'

export interface PageLayoutProps extends ComponentProps<'div'> {}

export const PageLayout: React.FC<PageLayoutProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cnBase('p-2', className)} {...props}>
      {children}
    </div>
  )
}
