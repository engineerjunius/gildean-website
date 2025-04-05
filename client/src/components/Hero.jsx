import React from 'react'
import { assets } from '../assets/assets'
import Contact from './Contact'
import { ReactTyped} from 'react-typed'
import { motion } from 'motion/react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-32 lg:pt-54 pb-36 px-4 sm:px-6 lg:px-18'>
      {/* left col */}
      <div className='w-full space-y-8'>
        <motion.div 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: "ease-in-out", duration: 1.5 }}

        className='flex flex-col'>
          <h1 className='text-4xl lg:text-6xl font-bold text-gray-800 flex flex-col items-center sm:items-start'>Welcome to <br /> <span className='text-blue-700 text-6xl lg:text-8xl'>Gildean</span> <span className='text-gray-800 text-4xl lg:text-5xl'> Engineering Services </span></h1>
          <p className='flex flex-col items-center sm:items-start text-lg lg:text-xl text-green-700'>"Engineered for Efficiency, Designed for Success."</p>
        </motion.div>
        <motion.div 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: "ease-in-out", duration: 2.5 }}
        className='hidden lg:flex'>
          <Link to={'/connect'}>
          <button>
            <span className='bg-blue-700 text-white px-4 absolute inline-flex animate-pulse py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer opacity-75'
            >Get in touch</span>
          </button>
          </Link>
        </motion.div>
      </div>

      {/* right col */}
      <div className='w-full flex flex-col items-center'>
        <motion.div 
        initial={{ x: 700 }}
        animate={{ x: 0 }}
        transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
        className='flex justify-center items-center'> 
          <img src={assets.hero} alt="" className='mx-auto w-full hover:scale-105 transition duration-300 ease-in-out'/>
        </motion.div>
        <div className='flex justify-center items-center pt-4'>
          <ReactTyped 
          strings={[
            '..Engineering Design and Analysis',
            '..Blueprint Plotting and Printing',
            '..Everyday Printing Solutions',
          ]}
          typeSpeed={80}
          backSpeed={70}
          loop
          className='text-green-700 text-2xl lg:text-4xl font-bold text-center mb-10'
          />
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 'all' }}
        transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
        className='sm:hidden flex items-center place-items-center justify-center'>
          <Link to={'/connect'}>
          <button className='w-full flex justify-center items-center pt-5'>
            <span className='bg-blue-700 text-white px-4 absolute inline-flex animate-pulse py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer opacity-75'>Get in touch</span>
          </button>
          </Link>
        </motion.div>
      </div>


    </div>
    
  )
}

export default Hero