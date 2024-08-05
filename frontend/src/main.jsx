import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home  from './pages/Home'
import Oximeter from './pages/Oximeter'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgotPassword'
import Healthcare from './pages/Healthcare'
import AgriculturePage from './pages/Agriculture'
import SmartCitiesPage from './pages/SmartCities'
import SmartHomesPage from './pages/SmartHomes'
// import Blog from './pages/Blog'

const router = createBrowserRouter(createRoutesFromElements (
  <>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/forgot-password" element={<ForgetPassword />} />
  <Route path='/oximeter' element={<Oximeter />} />
  <Route path='/healthcare' element={<Healthcare />} />
  <Route path='agriculture' element={<AgriculturePage />} />
  <Route path='smartcities' element={<SmartCitiesPage />} />
  <Route path='smarthomes' element={<SmartHomesPage />} />
  {/* <Route path='blogs' element={<Blog />} /> */}

  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
