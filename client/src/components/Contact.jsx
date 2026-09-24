import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import { ContactList, Reveal } from './Sections'

const Contact = () => {
  return (
    <section className="bg-navy-50 py-24">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Let's talk about your project</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-navy-500">
            Questions, quotes or a quick print job: reach out through any of these channels and we'll respond as soon as
            we can.
          </p>
          <Link to="/connect" className="btn btn-primary mt-8 px-6">
            Send us a message <LuArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
          <ContactList />
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
