import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/query-client'
import { AppRouter } from '@/routes/app-router'
import { Theme } from '@/theme/theme'

import './globals.css'

export const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <AppRouter />
        </Theme>
      </QueryClientProvider>
    </>
  )
}
