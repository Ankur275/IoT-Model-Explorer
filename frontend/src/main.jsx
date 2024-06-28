import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home  from './pages/Home'
import Oximeter from './pages/Oximeter'

const router = createBrowserRouter(createRoutesFromElements (
  <>
  <Route path="/home" element={<Home />} />
  <Route path='/oximeter' element={<Oximeter />} />
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
