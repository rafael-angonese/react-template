import React from 'react'

import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { tv } from 'tailwind-variants'

import { FileRejections } from './file-rejections'
import { RenderDragMessage } from './render-drag-message'

const dropzoneVariants = tv({
  base: 'border rounded border-gray-500 border-dashed cursor-pointer',
  variants: {
    isDragReject: {
      true: 'border-red-500',
    },
  },
})

export interface DropzoneProps extends DropzoneOptions {}

export const Dropzone: React.FC<DropzoneProps> = ({
  onDrop,
  accept,
  multiple = false,
  maxSize = 10000000,
  maxFiles,
  ...props
}) => {
  const {
    getRootProps,
    getInputProps,
    fileRejections,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept,
    multiple,
    onDrop,
    maxSize,
    maxFiles,
    ...props,
  })

  return (
    <>
      <section>
        <div {...getRootProps()} className={dropzoneVariants({ isDragReject })}>
          <input data-testid="file-upload" {...getInputProps()} />
          <p className="flex justify-center items-center p-4">
            <RenderDragMessage
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            />
          </p>
        </div>

        <FileRejections fileRejections={fileRejections} maxFiles={maxFiles} />
      </section>
    </>
  )
}
