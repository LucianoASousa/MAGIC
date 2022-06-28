import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { PlayButton } from './components/PlayButton'
import "./assets/styles/main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Legendary" element={<PlayButton />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
