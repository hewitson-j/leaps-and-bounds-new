import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Router from './components/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Router/>
    </HashRouter>
  </React.StrictMode>,
)
