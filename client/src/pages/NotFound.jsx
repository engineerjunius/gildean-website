import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'

const NotFound = () => (
  <section className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-20 text-center">
    <span className="font-mono text-sm text-brand-600">Error 404</span>
    <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Page not found</h1>
    <p className="mt-4 max-w-md text-lg text-navy-500">The page you're looking for doesn't exist or has been moved.</p>
    <Link to="/" className="btn btn-primary mt-8">
      <LuArrowLeft className="h-4 w-4" /> Back to home
    </Link>
  </section>
)

export default NotFound
