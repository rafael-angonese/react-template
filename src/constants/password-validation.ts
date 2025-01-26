import yup from '@/lib/yup'

export const hasLetterLowerCaseRegex = /[a-z]/
export const hasLetterUpperCaseRegex = /[A-Z]/
export const hasNumberRegex = /\d/
export const hasSpecialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/
export const PASSWORD_MIN_VALIDATION = 8
export const PASSWORD_MAX_VALIDATION = 255

export const passwordValidation = () => {
  return yup
    .string()
    .test({
      name: 'password',
      message: `\${path} deve incluir pelo menos uma letra minuscula e maiúscula, um número e um caractere especial`,
      test: function (value: string | undefined) {
        if (!value) {
          return true
        }

        // Verifica se há pelo menos uma letra minuscula
        const hasLetterLower = hasLetterLowerCaseRegex.test(value)

        // Verifica se há pelo menos uma letra maiúscula
        const hasLetterUpper = hasLetterUpperCaseRegex.test(value)

        // Verifica se há pelo menos um número
        const hasNumber = hasNumberRegex.test(value)

        // Verifica se há pelo menos um caractere especial
        const hasSpecialCharacter = hasSpecialCharacterRegex.test(value)

        // Retorna true se todos os critérios forem atendidos
        return (
          hasLetterLower && hasLetterUpper && hasNumber && hasSpecialCharacter
        )
      },
    })
    .min(PASSWORD_MIN_VALIDATION)
    .max(PASSWORD_MAX_VALIDATION)
}
