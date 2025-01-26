import React from 'react'

import { Heading } from '@/components/ui/heading/heading'

import { Actions } from './actions'

export const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Visualizando Empresa</Heading>
        <Actions />
      </div>
    </>
  )
}
