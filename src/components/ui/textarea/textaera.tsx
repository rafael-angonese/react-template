import { forwardRef } from 'react'

import {
  InputText,
  InputTextProps,
} from '@/components/ui/input-text/input-text'

export interface TextareaProps extends InputTextProps {}
export const Textarea = forwardRef(
  ({ minRows = 3, maxRows = 5, ...props }: TextareaProps, ref) => {
    return (
      <InputText
        multiline
        minRows={minRows}
        maxRows={maxRows}
        inputRef={ref}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
