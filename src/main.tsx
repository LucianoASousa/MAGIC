import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Legendary } from './components/Legendary'
import "./assets/styles/main.css"
import { Normal } from './components/Normal'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="Legendary" element={<Legendary />} />
        <Route path="Normal" element={<Normal />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
