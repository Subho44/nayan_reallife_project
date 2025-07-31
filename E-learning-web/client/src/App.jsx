import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {

  return <>
    <BrowserRouter>
      <Navbardata />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App