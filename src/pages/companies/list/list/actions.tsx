import React from 'react'

import { Eye, Pencil, Trash } from 'lucide-react'

import { Link } from '@/components/ui/link/link'
import { Tooltip } from '@/components/ui/tooltip/tooltip'
import { useDeleteCompany } from '@/pages/companies/components/delete/use-delete-company'
import { Company } from '@/types/company'

export interface ActionsProps {
  company: Company
}

export const Actions: React.FC<ActionsProps> = ({ company }) => {
  const { setId, setIsModalOpen } = useDeleteCompany()

  const item = company

  return (
    <>
      <div className="flex gap-2">
        <Link to={`/companies/show/${item.id}`}>
          <Tooltip title="Visualizar empresa">
            <Eye size={18} className="text-success" />
          </Tooltip>
        </Link>

        <Link to={`/companies/edit/${item.id}`}>
          <Tooltip title="Editar empresa">
            <Pencil size={18} className="text-warning" />
          </Tooltip>
        </Link>

        <Tooltip title="Excluir empresa">
          <Trash
            size={18}
            className="text-error cursor-pointer"
            onClick={() => {
              setId(item.id)
              setIsModalOpen(true)
            }}
          />
        </Tooltip>
      </div>
    </>
  )
}
