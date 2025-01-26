export const isDev = (): boolean => {
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === ''
  ) {
    return true
  }

  return false
}
