import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='min-h-screen block'>
        <div className='overflow-hidden'>

        <Hero />
        <Contact />
        </div>
    </div>
  )
}

export default Home