import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { StorageKeys } from '@/constants/storage-keys'
import LocalStorage from '@/utils/local-storage'

export type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
  isDarkMode: boolean
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  isDarkMode: true,
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (LocalStorage.getItem(StorageKeys.THEME) as Theme) || 'system',
  )

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  const isDarkMode = useMemo(() => {
    if (theme === 'system') {
      return systemTheme === 'dark'
    }

    return theme === 'dark'
  }, [systemTheme, theme])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme, systemTheme])

  const value = {
    theme,
    isDarkMode,
    setTheme: (theme: Theme) => {
      LocalStorage.setItem(StorageKeys.THEME, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
