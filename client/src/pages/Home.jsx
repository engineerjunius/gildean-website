import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import { CtaBand, Process, SectionHeading, ServiceCards, Values } from '../components/Sections'

const Home = () => {
  return (
    <>
      <Hero />

      <section className="container-page py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Three services, one reliable partner"
          text="From the first calculation to the final printed set, we handle the work so your project keeps moving."
        />
        <div className="mt-14">
          <ServiceCards />
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn btn-secondary">
            View all services <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-navy-100 py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Why Gildean" title="Built on precision and trust" />
          <div className="mt-14">
            <Values />
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-400">How it works</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A simple process, start to finish
            </h2>
          </div>
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>

      <CtaBand />
      <Contact />
    </>
  )
}

export default Home
