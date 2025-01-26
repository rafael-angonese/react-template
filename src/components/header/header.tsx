import React from 'react'

import { IconButton } from '@mui/material'
import { Menu } from 'lucide-react'

import { ToggleTheme } from '@/components/header/toggle-theme'
import { UserDropdownMenu } from '@/components/header/user-dropdown-menu'
import { Logo } from '@/components/logo/logo'
import { Link } from '@/components/ui/link/link'
import { useSidebarStore } from '@/store/use-sidebar'

export const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebarStore()

  return (
    <>
      <nav className="bg-background px-1 flex justify-between items-center border-0 border-b-[1px] border-slate-700">
        <div>
          <Link to="/">
            <Logo className="h-16 hidden sm:block" />
          </Link>

          <div className="block sm:hidden">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </IconButton>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ToggleTheme />
          <UserDropdownMenu />
        </div>
      </nav>
    </>
  )
}
