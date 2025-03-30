import isBlank from '@/utils/is-blank'

interface FormatCurrencyOptions {
  locale?: string
  currency?: string
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name' | 'none'
  maximumFractionDigits?: number
  minimumFractionDigits?: number
}

export const formatCurrency = (
  value?: number | string,
  opts: FormatCurrencyOptions = {},
): string => {
  const {
    locale = 'pt-BR',
    currency = 'BRL',
    currencyDisplay = 'symbol',
    maximumFractionDigits = 2,
    minimumFractionDigits = 2,
  } = opts

  if (isBlank(value) || isNaN(Number(value))) {
    return ''
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: currencyDisplay === 'none' ? 'decimal' : 'currency',
    currency,
    currencyDisplay: currencyDisplay === 'none' ? undefined : currencyDisplay,
    maximumFractionDigits,
    minimumFractionDigits,
  })

  let result = formatter.format(Number(value))

  if (currencyDisplay === 'none') {
    result = result.replace(/[^\d.,-]/g, '').trim()
  }

  return result
}
