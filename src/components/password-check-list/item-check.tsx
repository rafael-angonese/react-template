import React, { ComponentProps } from 'react'

import { Check, X } from 'lucide-react'

export interface ItemCheckProps extends ComponentProps<'div'> {
  isChecked: boolean
}

export const ItemCheck: React.FC<ItemCheckProps> = ({
  children,
  isChecked,
}) => {
  return (
    <>
      <div className="flex gap-2">
        {children}
        {isChecked ? (
          <Check className="text-success" size={20} />
        ) : (
          <X className="text-error" size={20} />
        )}
      </div>
    </>
  )
}
