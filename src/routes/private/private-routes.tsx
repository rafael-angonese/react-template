import { lazy } from 'react'

import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/layouts/app-layout'
import EditCompanyPage from '@/pages/companies/edit/edit-company-page'
import ListCompaniesPage from '@/pages/companies/list/list-companies-page'
import NewCompanyPage from '@/pages/companies/new/new-company-page'
import ShowCompanyPage from '@/pages/companies/show/show-company-page'

const HomePage = lazy(() => import('@/pages/home/home-page'))
const NotFoundPage = lazy(() => import('@/pages/not-found/not-found-page'))
const ListUsersPage = lazy(() => import('@/pages/users/list/list-users-page'))
const ShowUserPage = lazy(() => import('@/pages/users/show/show-user-page'))
const NewUserPage = lazy(() => import('@/pages/users/new/new-user-page'))
const EditUserPage = lazy(() => import('@/pages/users/edit/edit-user-page'))
const ExamplesPage = lazy(() => import('@/pages/examples/examples-page'))

export const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        element={<AppLayout />}
        // errorElement={<GenericErrorPage />}
      >
        <Route path="/" element={<HomePage />} />

        <Route path="/users" element={<ListUsersPage />} />
        <Route path="/users/show/:id" element={<ShowUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="/users/new" element={<NewUserPage />} />

        <Route path="/companies" element={<ListCompaniesPage />} />
        <Route path="/companies/show/:id" element={<ShowCompanyPage />} />
        <Route path="/companies/edit/:id" element={<EditCompanyPage />} />
        <Route path="/companies/new" element={<NewCompanyPage />} />

        <Route path="/examples/*" element={<ExamplesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
