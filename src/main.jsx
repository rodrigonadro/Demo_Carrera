import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 HashRouter evita los 404 en GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
