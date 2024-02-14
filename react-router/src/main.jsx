import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import {createBrowserRouter, reactBrowserRouter} from 'react-router-dom'
const router=createBrowserRouter([]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
