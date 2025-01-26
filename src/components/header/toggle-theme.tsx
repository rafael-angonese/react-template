import React from 'react'

import { IconButton, Tooltip } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Moon, Sun } from 'lucide-react'

import { Theme, useTheme } from '@/theme/theme-context'

export const ToggleTheme: React.FC = () => {
  const { setTheme } = useTheme()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onChangeTheme = (theme: Theme) => {
    setTheme(theme)
    handleClose()
  }

  return (
    <>
      <div>
        <Tooltip title="Mudar tema">
          <IconButton
            color="primary"
            onClick={handleClick}
            size="small"
            className="p-2 rounded-lg"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Sun
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              size={32}
            />
            <Moon
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              size={32}
            />
            <span className="sr-only">Mudar Tema</span>
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
          <MenuItem onClick={() => onChangeTheme('light')}>Claro</MenuItem>
          <MenuItem onClick={() => onChangeTheme('dark')}>Escuro</MenuItem>
          <MenuItem onClick={() => onChangeTheme('system')}>Sistema</MenuItem>
        </Menu>
      </div>
    </>
  )
}
