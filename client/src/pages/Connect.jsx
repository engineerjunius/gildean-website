import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

import { motion } from 'motion/react'

const Connect = () => {
  return (
    <div className='min-h-screen h-full bg-primary/30'>
      <motion.div 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: "ease-in-out", duration: 1.5, delay: 0.5 }}
      className='container mx-auto py-32 pt-46 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form*/}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
        <h2 className='text-center mb-12'>
          Let's <span className='text-indigo-600'>GET IN TOUCH.</span>
        </h2>
        {/* form */}
        <form className='flex flex-1 flex-col gap-6 w-full mx-auto'>
      
        {/* input group */}
          <div className='flex gap-x-6 w-full'>
          <input type="text" placeholder='name' className='border rounded-2xl border-black/50 flex-1 flex items-center text-center py-2  placeholder:text-black/50 placeholder:font-light' />
          <input type="text" placeholder='email' className='border rounded-2xl border-black/50 flex-1 flex items-center text-center py-2  placeholder:text-black/50 placeholder:font-light' />
          </div>
          <input type="text" placeholder='subject' className='border rounded-full border-black/50 flex-1 flex items-center text-center py-2  placeholder:text-black/50 placeholder:font-light' />
          <textarea name="" id="" placeholder='message' className='focus:ring-1 focus:ring-accent border border-black/50 rounded-2xl p-4  placeholder:text-black/50 placeholder:font-light'></textarea>
          <button className='rounded-full border border-black/50 max-w-[170px] px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group cursor-pointer hover:bg-green-500'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 gorup-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
        </form>
        </div>
      </motion.div>

    </div>
  )
}

export default Connect