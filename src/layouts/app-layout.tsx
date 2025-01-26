import React, { Suspense } from 'react'

import { LinearProgress } from '@mui/material'
import { Outlet, RouteProps } from 'react-router-dom'

import { Header } from '@/components/header/header'
import { Sidebar } from '@/components/sidebar/sidebar'

export const AppLayout: React.FC<RouteProps> = () => {
  return (
    <>
      <Header />

      <div className="flex flex-1 h-[calc(100vh-5rem)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto text-foreground bg-background">
          <Suspense fallback={<LinearProgress />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}
