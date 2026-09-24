import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LuMenu, LuX, LuArrowRight } from 'react-icons/lu'
import { navLinks } from '../data/site'
import Logo from './Logo'

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-brand-600' : 'text-navy-700 hover:text-navy-900'
  }`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'border-b border-navy-100 bg-white/95 shadow-sm backdrop-blur' : 'border-b border-transparent bg-white'
      }`}
    >
      <nav className="container-page flex h-18 items-center justify-between gap-8" aria-label="Main">
        <Link to="/" aria-label="Gildean Engineering Services — Home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map(({ title, url }) => (
            <li key={url}>
              <NavLink to={url} end={url === '/'} className={linkClass}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/connect" className="btn btn-primary hidden md:inline-flex">
          Request a quote <LuArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="-mr-2 rounded-lg p-2 text-navy-800 hover:bg-navy-50 md:hidden cursor-pointer"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="container-page border-t border-navy-100 pt-3 pb-6">
          <ul className="flex flex-col">
            {navLinks.map(({ title, url }) => (
              <li key={url}>
                <NavLink
                  to={url}
                  end={url === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-navy-800 hover:bg-navy-50'
                    }`
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/connect" className="btn btn-primary mt-4 w-full">
            Request a quote <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
