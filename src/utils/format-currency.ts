/* Examples
const price = 100

formatCurrency(price)

formatCurrency(price, {
  currencyDisplay: 'none',
})

*/

import isBlank from '@/utils/is-blank'

export const formatCurrency = (
  value?: number | string,
  opts: {
    locale?: string
    currency?: string
    style?: string
    currencyDisplay?: string
  } = {},
) => {
  const { locale = 'pt-br', currency = 'BRL', style = 'currency' } = opts
  const stripSymbols = opts.currencyDisplay === 'none'
  if (isBlank(value)) {
    return ''
  }

  let result = new Intl.NumberFormat(locale, {
    currency,
    style,
    maximumFractionDigits: 2,
  }).format(Number(value))

  if (stripSymbols) {
    result = result.split('$')[1].trim()
  }

  return result
}
