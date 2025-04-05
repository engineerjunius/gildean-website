import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'
import { assets } from './assets/assets'
import Connect from './pages/Connect'

const App = () => {
  return (
    <div className='px-4 bg-white relative sm:px-10 md:px-14 lg:px-26 min-h-screen'>
      <div className='absolute -top-28 -left-28 w-[450px] h-[450px] bg-gradient-to-tr from-green-600/40 to-indigo-300/40 rounded-full mix-blend-multiply blur-[80px] z-10 '></div>
      


      
    <Navbar />

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/connect' element={<Connect />} />
      
    </Routes>

    

    <Footer />
    
    </div>
  )
}

export default App