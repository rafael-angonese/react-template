import React from 'react'

import MuiThemeProvider from '@/theme/mui-theme'
import { ThemeProvider } from '@/theme/theme-context'
import { ToastProvider } from '@/theme/toast-provider'

interface ThemeProps {
  children: React.ReactNode
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
        <ToastProvider />
      </ThemeProvider>
    </>
  )
}
