import React from 'react'

import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import { router } from './router'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
