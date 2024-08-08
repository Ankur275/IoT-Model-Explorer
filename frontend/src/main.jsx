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
import BlogForm from './pages/Blog'
import FitnessTrackerInfo from './pages/FitnessTracker'
import ECGMonitorInfo from './pages/EcgMonitoring'
import SmartPillInfo from './pages/SmartPills'
import SmartInhalerInfo from './pages/Smartinhaller'
import GlucoseMonitorInfo from './pages/GlucoseMonitor'
import AdaptiveLightingInfo from './pages/AdaptiveLighting'
import BlogPost from './pages/Smartlock'
import AboutUs from './pages/AboutUs'
import BlogPost1 from './pages/Blog2'
import BlogPost2 from './pages/Blog3'
import BlogPost3 from './pages/Blog4'
// import AutomatedLightingInfo from './pages/AutomatedLight'
// import SoilMoistureSensorInfo from './pages/Soilmoisture'
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
  <Route path='Blog' element={<BlogForm />} />
  <Route path='/FitnessTracker' element={<FitnessTrackerInfo />} />
  <Route path='/ecg' element={<ECGMonitorInfo />} />
  <Route path='/smartpill' element={<SmartPillInfo/>} />
  <Route path='/smartinhaler' element={<SmartInhalerInfo/>} />
  <Route path='/glucosemonitor' element={<GlucoseMonitorInfo/>} />
  <Route path='/adaptivelighting' element={<AdaptiveLightingInfo/>} />
  <Route path='/exa' element={<BlogPost/>} />
  <Route path='/exb' element={<BlogPost1/>} />
  <Route path='/exc' element={<BlogPost2/>} />
  <Route path='/exd' element={<BlogPost3/>} />
  <Route path='/aboutus' element={<AboutUs/>} />
  {/* <Route path='/automatedlighting' element={<AutomatedLightingInfo/>} /> */}
  

  {/* <Route path='/soilmoisture' element={<SoilMoistureSensorInfo />} /> */}

  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
