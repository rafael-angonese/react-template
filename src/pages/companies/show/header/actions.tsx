import React from 'react'

import { Pencil, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button/button'
import { Link } from '@/components/ui/link/link'
import { useDeleteCompany } from '@/pages/companies/components/delete/use-delete-company'
import { useGetCompany } from '@/pages/companies/hooks/use-get-company'

export const Actions: React.FC = () => {
  const { data } = useGetCompany()
  const { setId, setIsModalOpen } = useDeleteCompany()

  const company = data?.data ?? null

  if (!company) return null

  return (
    <>
      <div className="flex gap-2">
        <Button variant="solid" color="warning" asChild>
          <Link to={`/companies/edit/${company?.id}`} className="gap-1">
            <Pencil size={18} />
            Editar
          </Link>
        </Button>

        <Button
          variant="solid"
          color="error"
          onClick={() => {
            setId(company!.id)
            setIsModalOpen(true)
          }}
        >
          <Trash size={18} className="cursor-pointer mr-1" />
          Excluir
        </Button>
      </div>
    </>
  )
}
