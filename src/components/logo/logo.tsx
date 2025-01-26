import React from 'react'

import { useTheme } from '@/theme/theme-context'

type ImageProps = Omit<React.ComponentProps<'img'>, 'src' | 'alt'>

export interface LogoProps extends ImageProps {}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  const { isDarkMode } = useTheme()
  return (
    <img
      alt="logomarca"
      className={`object-contain ${className}`}
      src={isDarkMode ? '/logo-light.png' : '/logo-dark.png'}
      {...props}
    />
  )
}
