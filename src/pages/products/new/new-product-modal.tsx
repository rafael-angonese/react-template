import React, { useEffect } from 'react'

import { Controller, FormProvider } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { Dialog } from '@/components/ui/dialog/dialog'
import { DialogContent } from '@/components/ui/dialog-content/dialog-content'
import { DialogTitle } from '@/components/ui/dialog-title/dialog-title'
import { FormControl } from '@/components/ui/form-control/form-control'
import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'
import { FormLabel } from '@/components/ui/form-label/form-label'
import { Grid } from '@/components/ui/grid/grid'
import { GridItem } from '@/components/ui/grid-item/grid-item'
import { InputNumber } from '@/components/ui/input-number/input-number'
import { InputText } from '@/components/ui/input-text/input-text'
import { formLabels } from '@/pages/products/new/form-labels'
import { CreateProductType } from '@/pages/products/new/productSchema'
import { useNewProduct } from '@/pages/products/new/use-new-product'
import { useProductForm } from '@/pages/products/new/useProductForm'
import { createProduct } from '@/repositories/products/create-product'
import handlingRequestError from '@/utils/handling-request-error/handling-request-error'

export const NewProductModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useNewProduct()

  const methods = useProductForm()

  const onSubmit = async (data: CreateProductType) => {
    try {
      await createProduct(data)
      handleClose()
    } catch (error) {
      handlingRequestError(error, formLabels)
    }
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods

  const handleClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    reset()
  }, [reset, isModalOpen])

  return (
    <>
      <Dialog fullWidth maxWidth="md" open={isModalOpen} onClose={handleClose}>
        <DialogTitle>Adicionar Produto</DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
                  <FormControl error={!!errors.name}>
                    <FormLabel required>{formLabels.name}</FormLabel>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <InputText {...field} placeholder={formLabels.name} />
                      )}
                    />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
                  <FormControl error={!!errors.price}>
                    <FormLabel required>{formLabels.price}</FormLabel>
                    <Controller
                      name="price"
                      control={control}
                      render={({ field }) => (
                        <InputNumber
                          prefix="R$ "
                          value={field.value}
                          onValueChange={(data) =>
                            field.onChange(data.floatValue)
                          }
                          placeholder={formLabels.price}
                        />
                      )}
                    />
                    <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>

              <div className="flex justify-end mt-4">
                <Button color="success">Salvar</Button>
              </div>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  )
}
