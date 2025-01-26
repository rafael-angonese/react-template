/* Examples
const price = 100

formatNumber(price)

formatNumber(price, {
  currencyDisplay: 'none',
})

*/

import isPresent from '@/utils/is-present'

interface OptionsProps extends Intl.NumberFormatOptions {
  locale?: string
  // style?: string
}

export const formatNumber = (
  value?: string | number | null,
  options: OptionsProps = {
    maximumFractionDigits: 2,
  },
): string => {
  const { locale = 'pt-br', style = 'decimal', ...restOptions } = options
  let formatted = ''

  if (isPresent(value)) {
    const valueToConvert = Number(value)
    formatted = new Intl.NumberFormat(locale, {
      style,
      ...restOptions,
    }).format(valueToConvert)
  }

  return formatted
}
