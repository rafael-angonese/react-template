import React, { LabelHTMLAttributes, ReactNode } from 'react'

import { useFormControl } from '@mui/material'
import { tv, VariantProps } from 'tailwind-variants'

export const formLabelVariants = tv({
  base: ['mb-1 text-sm font-medium leading-none'],
  variants: {
    error: {
      true: 'text-red-500  dark:text-red-500',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
})
interface FormLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof formLabelVariants> {
  children?: ReactNode
  required?: boolean
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  required,
  className,
  ...props
}) => {
  const { error, disabled } = useFormControl() || {}

  return (
    <>
      <label
        {...props}
        className={formLabelVariants({ error, disabled, className })}
      >
        {children}
        {required && <span className="text-red-500">&nbsp;*</span>}
      </label>
    </>
  )
}
