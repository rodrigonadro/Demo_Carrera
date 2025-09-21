import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Ajuste clave para GitHub Pages */}
    <BrowserRouter basename="/Demo_Carrera">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
