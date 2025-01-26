import React from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { queryKeys } from '@/constants/react-query-keys'
import {
  createCompany,
  CreateCompanyRequest,
} from '@/repositories/companies/create-company'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

import { Form } from '../components/form/form'
import { FormValues } from '../components/form/form-config/form-values'

export const NewForm: React.FC = () => {
  const methods = useFormContext<FormValues>()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { handleSubmit } = methods

  const onSubmit = async (values: FormValues) => {
    try {
      const body: CreateCompanyRequest = {
        ...values,
      }

      const { data } = await createCompany(body)

      toast.success('Empresa criada com sucesso!')

      queryClient.invalidateQueries({ queryKey: [queryKeys.companies] })
      navigate(`/companies/show/${data.id}`)
    } catch (error) {
      handlingRequestError(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form />
      </form>
    </>
  )
}
