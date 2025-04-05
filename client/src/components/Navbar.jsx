import React, { useState } from 'react'
import { assets, navLinks } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavItems = ({ navigate }) => {
    return (
        <ul className='nav-ul cursor-pointer'>
            {navLinks.map(({ id, url, title }) => (
                <li key={id} className='nav-li'>
                    <span className='nav-li_a'
                    onClick={() => navigate(url)}>
                        {title}
                    </span>
                </li>
            ))
            }
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const navigate = useNavigate();

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex gap-10 justify-between items-center py-4 px-4 sm:px-6 lg:px-10 md:h-20 h-16'>
            {/* logo */}
            <div>
                <img src="/logo2.png" alt="" 
                className='h-12'/>
            </div>

            {/* desktop navitems */}
            <div className='sm:flex hidden'>
                <NavItems navigate={navigate} />
            </div>

            {/* get in touch btn */}
            <div className='hidden md:block'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm  transition duration-300 ease-in-out cursor-pointer'
                onClick={() => navigate('/connect')}>
                    Get in touch
                </button>
            </div>

            {/* mobile navitems */}
            <button onClick={toggleMenu} className='focus:outline-none sm:hidden flex cursor-pointer' aria-label='Toggle Menu'>
                <img src={isOpen ? assets.close : assets.menu} alt="toggle" className='w-6 h-6' />

            </button>

        </div> 

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} border-t border-gray-100 container mx-auto px-4`} >

                <nav className='p-5'>
                    <NavItems navigate={navigate} />
                </nav>
                <button className='hidden md:block bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer w-full'>
                    Get in touch
                </button>
            </div>
    </nav>
  )
}

export default Navbar