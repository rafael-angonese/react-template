import React from 'react'

export interface RenderDragMessageProps {
  isDragActive: boolean
  isDragReject: boolean
}

export const RenderDragMessage: React.FC<RenderDragMessageProps> = ({
  isDragActive,
  isDragReject,
}) => {
  if (!isDragActive) {
    return <span>Clique ou arraste e solte os arquivos aqui...</span>
  }

  if (isDragReject) {
    return (
      <span className="border-red-500 text-red-500">Arquivo não suportado</span>
    )
  }

  return <span className="border-green-500">Solte os arquivos</span>
}
