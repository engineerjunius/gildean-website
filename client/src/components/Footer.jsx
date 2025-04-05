import React from 'react'

const Footer = () => {
  return (
    <div className='absolute w-full left-0 right-0 z-50 overflow-hidden'>
    <footer className='bg-gray-200 top-0 left-0 w-full mx-auto overflow-hidden px-6'>
        <div className='container mx-auto flex justify-between items-center py-1'>
            <div className='flex flex-col items-start'>
                {/* company logo */}
                <img src="/logo1.png" alt="" width={65} className='' />
                
            </div>
            <div>
                <p className='text-sm text-gray-500'>© 2025 engineerjunius.dev | All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer