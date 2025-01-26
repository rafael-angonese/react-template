import React from 'react'

import ReactDOM from 'react-dom/client'

import { enableMSW } from '@/repositories/mocks/enable-msw.ts'

import { App } from './app.tsx'

enableMSW()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
