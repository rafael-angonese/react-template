import React from 'react'

import { ToastContainer } from 'react-toastify'

import { useTheme } from '@/theme/theme-context'
import 'react-toastify/dist/ReactToastify.css'

export const ToastProvider: React.FC = () => {
  const { isDarkMode } = useTheme()

  return (
    <>
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} />
    </>
  )
}
