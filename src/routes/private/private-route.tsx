import React, { useEffect } from 'react'

import { Loader2 } from 'lucide-react'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'

import { useAuthStore } from '@/store/use-auth-store'

export const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  }

  return <Outlet />
}
