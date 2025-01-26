import React, { ReactNode } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import { getDesignTokens } from '@/theme/get-design-tokens'
import { useTheme } from '@/theme/theme-context'

interface MuiThemeProviderProps {
  children: ReactNode
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const { isDarkMode } = useTheme()

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getDesignTokens(isDarkMode)}>
          {children}
          <CssBaseline />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MuiThemeProvider
