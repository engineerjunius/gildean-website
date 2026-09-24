import React from 'react'
import { CtaBand, PageHeader, Process, ServiceCards } from '../components/Sections'

const Services = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Engineering and printing, done right"
        text="Choose a service below, or tell us what you need and we'll recommend the right approach."
      />

      <section className="container-page py-24">
        <ServiceCards detailed />
      </section>

      <section className="bg-navy-900 py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-400">How it works</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">From request to delivery</h2>
          </div>
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default Services
