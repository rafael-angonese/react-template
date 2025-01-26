import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      filled: '',
      outlined: '',
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  compoundVariants: [
    // FILLED
    {
      variant: 'filled',
      color: 'primary',
      class:
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ',
    },
    {
      variant: 'filled',
      color: 'secondary',
      class:
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    },
    {
      variant: 'filled',
      color: 'success',
      class:
        'border-transparent bg-success text-success-foreground hover:bg-success/80',
    },
    {
      variant: 'filled',
      color: 'warning',
      class:
        'border-transparent bg-warning text-warning-foreground hover:bg-warning/80',
    },
    {
      variant: 'filled',
      color: 'error',
      class:
        'border-transparent bg-error text-error-foreground hover:bg-error/80',
    },

    // OUTLINED
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'border-primary bg-background text-primary hover:text-primary/80 hover:border-primary/80',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class:
        'border-secondary bg-background text-secondary hover:text-secondary/80 hover:border-secondary/80',
    },
    {
      variant: 'outlined',
      color: 'success',
      class:
        'border-success bg-background text-success hover:text-success/80 hover:border-success/80',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class:
        'border-warning bg-background text-warning hover:text-warning/80 hover:border-warning/80',
    },
    {
      variant: 'outlined',
      color: 'error',
      class:
        'border-error bg-background text-error hover:text-error/80 hover:border-error/80',
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
})

export interface BadgeProps
  extends Omit<ComponentProps<'div'>, 'color' | 'size'>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  color,
  size,
  className,
}) => {
  return (
    <div className={badgeVariants({ color, size, variant, className })}>
      {children}
    </div>
  )
}
