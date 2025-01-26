import React, { useState } from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button/button'
import { Dialog } from '@/components/ui/dialog/dialog'
import { DialogActions } from '@/components/ui/dialog-actions/dialog-actions'
import { DialogContent } from '@/components/ui/dialog-content/dialog-content'
import { DialogTitle } from '@/components/ui/dialog-title/dialog-title'
import { queryKeys } from '@/constants/react-query-keys'
import { useDeleteCompany } from '@/pages/companies/components/delete/use-delete-company'
import { deleteCompany } from '@/repositories/companies/delete-company'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

interface DeleteCompanyModalProps {
  onDeleteSuccess?: () => void
}

export const DeleteCompanyModal: React.FC<DeleteCompanyModalProps> = ({
  onDeleteSuccess,
}) => {
  const queryClient = useQueryClient()

  const { isModalOpen, id, reset } = useDeleteCompany()
  const [isLoading, setIsLoading] = useState(false)

  const onDeleteUser = async () => {
    try {
      setIsLoading(true)
      await deleteCompany(id!)

      toast.success('Excluído com sucesso!')
      queryClient.invalidateQueries({ queryKey: [queryKeys.companies] })

      handleClose()

      if (onDeleteSuccess) {
        onDeleteSuccess()
      }
    } catch (error) {
      handlingRequestError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    reset()
  }

  return (
    <>
      <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle>Deletar Empresa</DialogTitle>
        <DialogContent>
          Tem certeza de que deseja inativar está empresa?
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            disabled={isLoading}
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            color="error"
            variant="outlined"
            disabled={isLoading}
            isLoading={isLoading}
            onClick={onDeleteUser}
          >
            <Trash size={16} className="mr-2" />
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
