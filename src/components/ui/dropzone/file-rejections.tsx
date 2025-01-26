import React from 'react'

import { ErrorCode, FileRejection } from 'react-dropzone'

import { FormErrorMessage } from '@/components/ui/form-error-message/form-error-message'

const ErrorCodeMap = {
  [ErrorCode.FileInvalidType]: 'Tipo de arquivo inválido',
  [ErrorCode.FileTooLarge]: 'Arquivo muito grande',
  [ErrorCode.FileTooSmall]: 'Arquivo muito pequeno',
  [ErrorCode.TooManyFiles]: 'Limite máximo de arquivos',
}

export interface FileRejectionsProps {
  fileRejections: FileRejection[]
  maxFiles?: number
}

export const FileRejections: React.FC<FileRejectionsProps> = ({
  fileRejections,
  maxFiles,
}) => {
  return (
    <>
      {fileRejections &&
        fileRejections.map((fileRejection) => {
          return (
            <FormErrorMessage key={fileRejection.file.name} className="block">
              Arquivo rejeitado: {fileRejection.file.name} -{' '}
              {fileRejection.errors.map((error) => {
                const code = error.code as ErrorCode

                if (code === ErrorCode.TooManyFiles && maxFiles) {
                  return ErrorCodeMap[code] + `: ${maxFiles}`
                } else {
                  return ErrorCodeMap[code]
                }
              })}
            </FormErrorMessage>
          )
        })}
    </>
  )
}
