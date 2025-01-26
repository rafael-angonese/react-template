import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { CircularProgress } from '@/components/ui/circular-progress/circular-progress'

interface Props {
  isOpen: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  message: string
  confirmCallback?: () => void
  confirmButtonText?: string
  confirmButtonColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'inherit'
  showCancelButton?: boolean
  isLoading?: boolean
  handleCloseCallback?: () => void
}

const AlertDialog: React.FC<Props> = ({
  isOpen,
  setOpen,
  title,
  message,
  confirmCallback,
  confirmButtonText,
  confirmButtonColor,
  showCancelButton,
  isLoading,
  handleCloseCallback,
}) => {
  const handleClose = () => {
    if (handleCloseCallback) {
      return handleCloseCallback()
    }
    if (setOpen) {
      setOpen(false)
    }
  }

  const handleConfirmButton = () => {
    if (confirmCallback) {
      confirmCallback()
      return
    }
    handleClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isLoading ? <CircularProgress /> : message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {showCancelButton && (
          <Button onClick={handleClose} color="secondary" disabled={isLoading}>
            Cancelar
          </Button>
        )}
        <Button
          onClick={handleConfirmButton}
          color={confirmButtonColor || 'primary'}
          disabled={isLoading}
        >
          {confirmButtonText || 'OK'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertDialog
