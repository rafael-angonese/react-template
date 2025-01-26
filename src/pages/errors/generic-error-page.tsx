import React from 'react'

import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const GenericErrorPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-1">
      <span className="text-center text-[40px] font-light">
        Ocorreu um erro
      </span>
      <span className="text-center text-[18px] text-gray-400">
        Acesse abaixo a plataforma
      </span>
      <NavLink to="/" className="mt-8">
        <Button variant="contained">Ir para o início</Button>
      </NavLink>
    </div>
  )
}

export default GenericErrorPage
