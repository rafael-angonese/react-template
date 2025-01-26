import React from 'react'

import { Button } from '@/components/ui/button/button'
import { Heading } from '@/components/ui/heading/heading'
import { Link } from '@/components/ui/link/link'

export const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Empresas</Heading>

        <Button variant="solid" color="success" asChild>
          <Link to="/companies/new">Novo</Link>
        </Button>
      </div>
    </>
  )
}
