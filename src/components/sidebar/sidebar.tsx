import React from 'react'

import { Drawer, IconButton } from '@mui/material'
import { X } from 'lucide-react'

import { Logo } from '@/components/logo/logo'
import { SidebarItems } from '@/components/sidebar/sidebar-items'
import { useSidebarStore } from '@/store/use-sidebar'

export const Sidebar: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebarStore()

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Drawer anchor={'left'} open={isOpen} onClose={handleClose}>
        <aside
          role="presentation"
          onClick={handleClose}
          className="overflow-y-auto bg-background min-w-[260px] w-[260px] border-0 border-r-[1px] border-slate-700"
        >
          <div className="flex justify-between items-center">
            <Logo className="h-16" />
            <IconButton onClick={handleClose}>
              <X />
            </IconButton>
          </div>
          <SidebarItems />
        </aside>
      </Drawer>
      <aside className="hidden sm:block overflow-y-auto bg-background min-w-[260px] w-[260px] border-0 border-r-[1px] border-slate-700">
        <div className="flex flex-col">
          <SidebarItems />
        </div>
      </aside>
    </>
  )
}
