import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OpenWindow from './support-open'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenWindow />
  </StrictMode>,
)
  