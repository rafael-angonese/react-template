export enum HttpErrorCode {
  USER_WAS_INACTIVATED = 'USER_WAS_INACTIVATED',
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  RECOVERY_PASSWORD_TOKEN_INVALID = 'RECOVERY_PASSWORD_TOKEN_INVALID',
}

export const HttpErrorCodeMap = {
  [HttpErrorCode.USER_WAS_INACTIVATED]:
    'Seu usuário foi inativado, entre em contato com o suporte!',
  [HttpErrorCode.AUTHENTICATION_FAILED]: 'Credências inválidas!',
  [HttpErrorCode.USER_NOT_FOUND]: 'Usuário nao encontrado',
  [HttpErrorCode.RECOVERY_PASSWORD_TOKEN_INVALID]:
    'Esse link para redefinir a senha não existe ou expirou!',
}
