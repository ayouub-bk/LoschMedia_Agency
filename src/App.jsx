import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import { HomeScreen , About , Testimonials , Pricing ,Contact } from './pages'
import './index.css'

const App = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<HomeScreen/>}  />
    <Route path='/About' element={<About/>}  />
    <Route path='/Testimonials' element={<Testimonials/>}  />
    <Route path='/Contact' element={<Contact/>}  />
    <Route path='/Pricing' element={<Pricing/>}  />
   </Routes>
  </>
  )
}

export default App