import { ComponentPropsWithRef, forwardRef } from 'react'

import { Slot, Slottable } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'flex items-center justify-center text-foreground rounded-lg w-fit text-center font-medium focus:outline-hidden focus:ring-2',
  variants: {
    variant: {
      solid: '',
      outlined: '',
      ghost: '',
      link: 'text-primary hover:text-primary/70! hover:underline underline-offset-4 p-0! bg-background ring-0!',
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
    },
    size: {
      xs: 'py-2 px-3 text-xs',
      sm: 'py-2 px-3 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'py-3 px-5 text-lg',
      xl: 'py-4 px-4 text-xl',
    },
    fullWidth: {
      true: 'w-full',
    },
    rounded: {
      true: 'rounded-full',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed!',
    },
    shadow: {
      true: 'shadow-lg',
    },
  },
  compoundVariants: [
    // SOLID
    {
      variant: 'solid',
      color: 'primary',
      class:
        'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/60',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class:
        'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary/60',
    },
    {
      variant: 'solid',
      color: 'success',
      class:
        'bg-success text-success-foreground hover:bg-success/90 focus:ring-success/60',
    },
    {
      variant: 'solid',
      color: 'warning',
      class:
        'bg-warning text-warning-foreground hover:bg-warning/90 focus:ring-warning/60',
    },
    {
      variant: 'solid',
      color: 'error',
      class:
        'bg-error text-error-foreground hover:bg-error/90 focus:ring-error/60',
    },

    // OUTLINED
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'text-primary bg-background hover:text-primary-foreground border border-primary/60 hover:bg-primary focus:ring-primary/60',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class:
        'text-secondary bg-background hover:text-secondary-foreground border border-secondary/60 hover:bg-secondary focus:ring-secondary/60',
    },
    {
      variant: 'outlined',
      color: 'success',
      class:
        'text-success bg-background hover:text-success-foreground border border-success/60 hover:bg-success focus:ring-success/60',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class:
        'text-warning bg-background hover:text-warning-foreground border border-warning/60 hover:bg-warning focus:ring-warning/60',
    },
    {
      variant: 'outlined',
      color: 'error',
      class:
        'text-error bg-background hover:text-error-foreground border border-error/60 hover:bg-error focus:ring-error/60',
    },

    // GHOST
    {
      variant: 'ghost',
      color: 'primary',
      class:
        'text-primary bg-background border border-transparent hover:border-primary/60 hover:bg-primary/5 focus:ring-primary/60',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class:
        'text-secondary bg-background border border-transparent hover:border-secondary/60 hover:bg-secondary/5 focus:ring-secondary/60',
    },
    {
      variant: 'ghost',
      color: 'success',
      class:
        'text-success bg-background border border-transparent hover:border-success/60 hover:bg-success/5 focus:ring-success/60',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class:
        'text-warning bg-background border border-transparent hover:border-warning/60 hover:bg-warning/5 focus:ring-warning/60',
    },
    {
      variant: 'ghost',
      color: 'error',
      class:
        'text-error bg-background border border-transparent hover:border-error/60 hover:bg-error/5 focus:ring-error/60',
    },

    // SHADOW
    {
      shadow: true,
      color: 'primary',
      class: 'shadow-primary/50',
    },
    {
      shadow: true,
      color: 'secondary',
      class: 'shadow-secondary/50',
    },
    {
      shadow: true,
      color: 'success',
      class: 'shadow-success/50',
    },
    {
      shadow: true,
      color: 'warning',
      class: 'shadow-warning/50',
    },
    {
      shadow: true,
      color: 'error',
      class: 'shadow-error/50',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'color' | 'disabled' | 'size'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  isLeftLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      size,
      disabled,
      fullWidth,
      rounded,
      shadow,
      className,
      isLoading = false,
      isLeftLoading = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={buttonVariants({
          variant,
          color,
          rounded,
          disabled: !!disabled,
          size,
          shadow,
          fullWidth,
          className,
        })}
        disabled={!!disabled}
        ref={ref}
        {...props}
      >
        {isLoading && isLeftLoading && (
          <Loader2 className="animate-spin opacity-70" />
        )}
        <Slottable>{children}</Slottable>
        {isLoading && !isLeftLoading && (
          <Loader2 className="animate-spin opacity-70" />
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
