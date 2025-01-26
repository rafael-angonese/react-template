import React from 'react'

import { IconButton, Tooltip } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Fingerprint, LogOut, User } from 'lucide-react'

import { useAuthStore } from '@/store/use-auth-store'

export const UserDropdownMenu: React.FC = () => {
  const { logout } = useAuthStore()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <div>
        <Tooltip title="Minha Conta">
          <IconButton
            color="primary"
            onClick={handleClick}
            size="small"
            className="border-solid border-primary border p-2 rounded-lg"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <User className="h-[1.2rem] w-[1.2rem]" />
          </IconButton>
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} className="flex gap-2">
            <Fingerprint />
            Meu Perfil
          </MenuItem>
          <MenuItem onClick={logout} className="flex gap-2">
            <LogOut />
            Sair
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
