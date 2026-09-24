import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuArrowRight, LuCircleCheck } from 'react-icons/lu'
import { company, services } from '../data/site'
import BlueprintArt from './BlueprintArt'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      <div className="blueprint-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="container-page relative grid items-center gap-14 pt-32 pb-20 lg:grid-cols-2 lg:gap-10 lg:pt-40 lg:pb-28">
        {/* copy */}
        <div className="text-center lg:text-left">
          <motion.span {...fadeUp(0)} className="eyebrow">
            <span className="h-px w-6 bg-brand-500" /> Engineering · Plotting · Printing
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Structural design and prints you can <span className="text-brand-600">build on.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-500 lg:mx-0">
            {company.name} delivers engineering design and analysis, accurate blueprint plotting, and dependable
            everyday printing, all under one roof.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link to="/connect" className="btn btn-primary px-6">
              Request a quote <LuArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn btn-secondary px-6">
              Explore services
            </Link>
          </motion.div>

          <motion.ul
            {...fadeUp(0.4)}
            className="mt-10 flex flex-col items-center gap-3 text-sm text-navy-700 sm:flex-row sm:justify-center sm:gap-6 lg:justify-start"
          >
            {services.map(({ slug, short }) => (
              <li key={slug} className="flex items-center gap-2">
                <LuCircleCheck className="h-4 w-4 shrink-0 text-brand-600" />
                {short}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="rounded-3xl bg-white p-2 shadow-2xl shadow-navy-900/15 ring-1 ring-navy-100">
            <BlueprintArt />
          </div>

          <div className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-navy-100 sm:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/15 font-mono text-sm font-medium text-gold-500">
              1:100
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold text-navy-900">Drawn to scale</span>
              <span className="block text-xs text-navy-500">Checked before it's printed</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
