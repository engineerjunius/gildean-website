import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Connect from './pages/Connect'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contact" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
