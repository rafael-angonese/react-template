import { createTheme } from '@mui/material/styles'

export const getDesignTokens = (isDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      text: {
        primary: 'hsl(var(--foreground))',
        secondary: 'hsl(var(--foreground))',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 600,
        lg: 700,
        xl: 1536,
      },
    },
  })
}
