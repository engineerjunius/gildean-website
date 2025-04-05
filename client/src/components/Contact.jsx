import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    

    <div className='pt-22 lg:pt-16 mb-5 py-10 bg-gradient-to-br from-green-200 to-blue-200 rounded-se-full flex flex-col justify-center'>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
      className='container min-h-[350px] mx-auto flex flex-col justify-center py-12 items-center'>
          
          <h1 className='text-3xl lg:text-5xl text-indigo-800 font-bold mb-2 justify-center'>Contact Us</h1>
          <p className='text-gray-500'>Let's connect.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 mt-6'>
        {/* phone */}
        <div className='flex items-center justify-center gap-4'>
          <img src={assets.phone} alt="" width={40} className='hover:scale-105 cursor-pointer animate-pulse'/>
          <h2 className='text-gray-600'>"your number here"</h2>
        </div>

        {/* email */}
        <div className='flex items-center justify-center gap-4'>
          <img src={assets.message} alt="" width={45} className='hover:scale-105 cursor-pointer animate-pulse' />
          <h2 className='text-gray-600'>gildeanengineeringservices@gmail.com</h2>
        </div>

        {/* facebook */}
        <div className='flex items-center justify-center gap-4'>
          <img src={assets.facebook} alt="" width={40} className='hover:scale-105 cursor-pointer animate-pulse' />
          <h2 className='text-gray-600'>Gildean Engineering Services</h2>
        </div>

      </div>

      {/* location */}
      <div className='flex flex-col justify-center items-center py-4 mt-10'>
        <h1 className='text-3xl lg:text-5xl text-indigo-800 font-bold mb-2 justify-center'>Our Location</h1>
      </div>
      <div className='flex items-center justify-center gap-4 text-gray-600'>
        <img src={assets.location} alt="" width={45}/>
        <p>"your location here"</p>
      </div>

      </motion.div>
    </div>
    
  )
}

export default Contact