import React from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { useFormContext } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { queryKeys } from '@/constants/react-query-keys'
import { useGetCompany } from '@/pages/companies/hooks/use-get-company'
import { CreateCompanyRequest } from '@/repositories/companies/create-company'
import { updateCompany } from '@/repositories/companies/update-company'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { Form } from '../components/form/form'
import { FormValues } from '../components/form/form-config/form-values'

export const EditForm: React.FC = () => {
  const { id } = useParams()
  const methods = useFormContext<FormValues>()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { data } = useGetCompany()

  const company = data?.data ?? null

  const { handleSubmit } = methods

  const onSubmit = async (values: FormValues) => {
    try {
      const body: CreateCompanyRequest = {
        ...values,
      }

      const { data } = await updateCompany(id!, body)

      toast.success('Empresa atualizada com sucesso!')

      queryClient.invalidateQueries({ queryKey: [queryKeys.companies] })
      navigate(`/companies/show/${data.id}`)
    } catch (error) {
      handlingRequestError(error)
    }
  }

  if (!company) return null

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form />
      </form>
    </>
  )
}
