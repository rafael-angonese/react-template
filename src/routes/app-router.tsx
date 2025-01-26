import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RootLayout } from '@/layouts/root-layout'
import LoginPage from '@/pages/login/login-page'
import NotFoundPage from '@/pages/not-found/not-found-page'
import RecoveryPasswordPage from '@/pages/recovery-password/recovery-password-page'
import ResetPasswordPage from '@/pages/reset-password/reset-password-page'
import { PrivateRoute } from '@/routes/private/private-route'
import { PrivateRoutes } from '@/routes/private/private-routes'
import { PublicRoute } from '@/routes/public/public-route'

export const AppRouter: React.FC = () => {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/recovery-password"
              element={<RecoveryPasswordPage />}
            />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<PrivateRoutes />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RootLayout>
  )
}
