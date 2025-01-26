import React from 'react'

import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'

import { FormValues } from './form-config/form-values'

export const SubmitButton: React.FC = () => {
  const methods = useFormContext<FormValues>()

  const {
    formState: { isSubmitting },
  } = methods

  return (
    <>
      <div className="flex justify-end mt-4">
        <Button
          disabled={isSubmitting}
          variant="solid"
          color="success"
          type="submit"
        >
          Salvar
        </Button>
      </div>
    </>
  )
}
