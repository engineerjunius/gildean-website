import React from 'react'
import { Link } from 'react-router-dom'
import { LuMail, LuPhone, LuFacebook } from 'react-icons/lu'
import { company, navLinks, services } from '../data/site'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" aria-label="Home">
            <Logo light />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed">{company.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={`mailto:${company.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition hover:bg-brand-600"
            >
              <LuMail className="h-5 w-5" />
            </a>
            {company.phone && (
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition hover:bg-brand-600"
              >
                <LuPhone className="h-5 w-5" />
              </a>
            )}
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition hover:bg-brand-600"
            >
              <LuFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map(({ title, url }) => (
              <li key={url}>
                <Link to={url} className="transition hover:text-white">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map(({ slug, title }) => (
              <li key={slug}>
                <Link to={`/services#${slug}`} className="transition hover:text-white">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© 2025 {company.name}. All rights reserved.</p>
          <p>Website by engineerjunius.dev</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
