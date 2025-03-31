import React from 'react'

import { Link } from '@/components/ui/link/link'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center container">
      <h1 className="font-extrabold text-center text-transparent text-6xl bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
        A página que você estava buscando não existe ou não está mais
        disponível.
      </h1>
      <p className="text-2xl mt-8">
        Você pode ir para a{' '}
        <Link to="/" className="font-bold text-blue-400 underline">
          página inicial
        </Link>
      </p>
    </div>
  )
}

export default NotFoundPage
