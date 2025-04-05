import React from 'react'
import { services } from '../assets/assets'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 pt-38'>
      {/* heading text */}
      <motion.div 
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
      className='text-center mb-22'>
        <h2 className='text-4xl text-indigo-800 font-bold'>Our Services</h2>
        <p className='text-gray-500'>What we offer</p>
      </motion.div>

      {/* services */}
      <motion.div 
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ type: "ease-in-out", duration: 2, delay: 0.5 }}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service,index) => (
          <div key={index} className='flex flex-col items-center'>
            <div>
              <div className='flex flex-col'>
                <img src={service.photo} alt="" className='w-56 h-56 rounded-full' />
              </div>
            </div>
            <h3 className='pt-2 font-medium text-2xl mb-3 text-neutral-900'>{service.title}</h3>
            <p className='text-gray-500 text-center text-lg'>{service.description}</p>
          </div>
        ))}
      </motion.div>

      {/* button */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
      className='flex justify-center mt-12'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm  transition duration-300 ease-in-out cursor-pointer animate-pulse'>
          Get in touch
        </button>
      </motion.div>
      
    </div>
  )
}

export default Services