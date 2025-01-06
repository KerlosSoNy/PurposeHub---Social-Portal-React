import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './utils/routes/routes.tsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
