import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/store/use-auth-store'

interface Props {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogoutDialog: React.FC<Props> = ({ isOpen, setOpen }) => {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = async () => {
    logout()
    navigate('/auth/login')
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="logout-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="logout-dialog-title">Sair</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Tem certeza que deseja sair de sua conta?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="!text-secondary">
          Cancelar
        </Button>
        <Button onClick={handleLogout} className="!text-danger">
          Sair da minha conta
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutDialog
