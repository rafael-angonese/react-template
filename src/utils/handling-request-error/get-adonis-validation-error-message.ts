import { AdonisRulesTranslations } from '@/constants/adonis-rules-translation'
import { AdonisUnprocessableEntityResponse } from '@/utils/handling-request-error/validation-error'

export const getAdonisValidationErrorMessage = (
  error: AdonisUnprocessableEntityResponse,
  labels: Record<string, string>,
): string => {
  const label = labels[error.field] ? labels[error.field] : ''
  const rule = AdonisRulesTranslations[error.rule]
    ? AdonisRulesTranslations[error.rule]
    : ''

  let args = ''

  if (error.args) {
    if (error.args.start && error.args.stop) {
      args += `${error.args.start} e ${error.args.stop}`
    }
    if (error.args.maxLength) {
      args += `${error.args.maxLength} caracteres/itens`
    }
    if (error.args.minLength) {
      args += `${error.args.minLength} caracteres/itens`
    }
  }

  return `O campo ${label} ${rule} ${args}`
}
