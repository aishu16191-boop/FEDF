import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uniparent from './Uniparent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Uniparent />
  </StrictMode>,
)
