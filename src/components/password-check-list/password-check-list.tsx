import React, { ComponentProps } from 'react'

import { cnBase } from 'tailwind-variants'

import {
  hasLetterLowerCaseRegex,
  hasLetterUpperCaseRegex,
  hasNumberRegex,
  hasSpecialCharacterRegex,
  PASSWORD_MAX_VALIDATION,
  PASSWORD_MIN_VALIDATION,
} from '@/constants/password-validation'

import { ItemCheck } from './item-check'

export interface PasswordCheckListProps extends ComponentProps<'div'> {
  password: string
}

export const PasswordCheckList: React.FC<PasswordCheckListProps> = ({
  password,
  className,
}) => {
  return (
    <>
      <div className={cnBase('flex flex-col gap-1', className)}>
        <ItemCheck
          isChecked={!!password && hasLetterLowerCaseRegex.test(password)}
        >
          A senha deve possuir letras minusculas
        </ItemCheck>
        <ItemCheck
          isChecked={!!password && hasLetterUpperCaseRegex.test(password)}
        >
          A senha deve possuir letras maiúsculas
        </ItemCheck>
        <ItemCheck isChecked={!!password && hasNumberRegex.test(password)}>
          A senha deve possuir números
        </ItemCheck>
        <ItemCheck
          isChecked={!!password && hasSpecialCharacterRegex.test(password)}
        >
          A senha deve possuir caracteres especiais
        </ItemCheck>
        <ItemCheck
          isChecked={!!password && password.length >= PASSWORD_MIN_VALIDATION}
        >
          A senha deve possuir pelo menos {PASSWORD_MIN_VALIDATION} caracteres
        </ItemCheck>
        <ItemCheck
          isChecked={!!password && password.length <= PASSWORD_MAX_VALIDATION}
        >
          A senha deve possuir no máximo {PASSWORD_MAX_VALIDATION} caracteres
        </ItemCheck>
      </div>
    </>
  )
}
