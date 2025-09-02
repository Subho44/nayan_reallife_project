import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'

import Otpverify from './components/Otpverify'
import Dashboard from './components/Dashboard'
const App = () => {
  const  isloggedin = localStorage.getItem('isloggedin')
  return <>

    <BrowserRouter>
      <Navbardata />
      <Routes>
        <Route path='/' element={isloggedin ? <Navigate to="/dashboard"/>:<Login/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/dashboard' element={isloggedin ? <Dashboard/>:<Navigate to="/"/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/otp-verify' element={<Otpverify />}></Route>

      </Routes>
    </BrowserRouter>

  </>
}

export default App