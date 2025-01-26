import React from 'react'

import { Building2, Code, Home, Users } from 'lucide-react'

import { NavLink } from '@/components/sidebar/nav-link'

export const SidebarItems: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavLink to="/">
          <Home />
          Dashboard
        </NavLink>
        <NavLink to="/users">
          <Users />
          Usuários
        </NavLink>
        <NavLink to="/companies">
          <Building2 />
          Empresas
        </NavLink>
        <NavLink to="/examples">
          <Code />
          Exemplos
        </NavLink>
      </div>
    </>
  )
}
