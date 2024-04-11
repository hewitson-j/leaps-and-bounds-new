import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
)
