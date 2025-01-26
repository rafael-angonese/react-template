import { forwardRef } from 'react'

import { NumericFormat, NumericFormatProps } from 'react-number-format'

import {
  InputText,
  InputTextProps,
} from '@/components/ui/input-text/input-text'

export type InputNumberProps = NumericFormatProps & InputTextProps

export const InputNumber = forwardRef(
  (
    {
      className,
      allowNegative = false,
      decimalScale = 2,
      fixedDecimalScale = true,
      thousandSeparator = '.',
      decimalSeparator = ',',
      ...props
    }: InputNumberProps,
    ref,
  ) => {
    return (
      <>
        <NumericFormat
          {...props}
          getInputRef={ref}
          className={className}
          allowNegative={allowNegative}
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          thousandSeparator={thousandSeparator}
          decimalSeparator={decimalSeparator}
          customInput={InputText}
        />
      </>
    )
  },
)

InputNumber.displayName = 'InputNumber'
