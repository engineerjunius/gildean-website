import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuArrowRight, LuCheck, LuMail, LuPhone, LuMapPin, LuClock, LuFacebook } from 'react-icons/lu'
import { company, services, values, process } from '../data/site'

export const Reveal = ({ as = 'div', children, className = '', delay = 0 }) => {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}

export const SectionHeading = ({ eyebrow, title, text, center = true }) => (
  <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
    {text && <p className="mt-4 text-lg leading-relaxed text-navy-500">{text}</p>}
  </Reveal>
)

export const PageHeader = ({ eyebrow, title, text }) => (
  <section className="relative overflow-hidden bg-navy-900 pt-36 pb-20 text-center">
    <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
    <div className="container-page relative">
      <span className="eyebrow text-gold-400">{eyebrow}</span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
      {text && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{text}</p>}
    </div>
  </section>
)

export const ServiceCards = ({ detailed = false }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {services.map(({ slug, icon: Icon, title, summary, features }, i) => (
      <Reveal key={slug} delay={i * 0.1} className="h-full">
        <article
          id={slug}
          className="group flex h-full scroll-mt-28 flex-col rounded-2xl border border-navy-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-navy-900/5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
          <p className="mt-3 leading-relaxed text-navy-500">{summary}</p>

          {detailed && (
            <ul className="mt-6 space-y-3 border-t border-navy-100 pt-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-navy-700">
                  <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Link
            to={detailed ? `/connect?service=${slug}` : `/services#${slug}`}
            className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {detailed ? 'Request this service' : 'Learn more'}
            <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </article>
      </Reveal>
    ))}
  </div>
)

export const Values = () => (
  <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
    {values.map(({ icon: Icon, title, text }, i) => (
      <Reveal key={title} delay={i * 0.08}>
        <Icon className="h-7 w-7 text-gold-500" />
        <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
        <p className="mt-2 leading-relaxed text-navy-500">{text}</p>
      </Reveal>
    ))}
  </div>
)

export const Process = () => (
  <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {process.map(({ step, title, text }, i) => (
      <Reveal as="li" key={step} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <span className="font-mono text-sm text-gold-400">{step}</span>
        <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-200">{text}</p>
      </Reveal>
    ))}
  </ol>
)

export const CtaBand = () => (
  <section className="container-page py-20">
    <Reveal className="relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-14 text-center sm:px-14 lg:flex lg:items-center lg:justify-between lg:text-left">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Have a project in mind?</h2>
        <p className="mt-3 text-lg text-brand-100">Send us your plans or requirements and we'll get back to you with a quote.</p>
      </div>
      <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
        <Link to="/connect" className="btn btn-light px-6">
          Request a quote <LuArrowRight className="h-4 w-4" />
        </Link>
        <a href={`mailto:${company.email}`} className="btn border border-white/40 px-6 text-white hover:bg-white/10">
          <LuMail className="h-4 w-4" /> Email us
        </a>
      </div>
    </Reveal>
  </section>
)

const contactItems = () =>
  [
    { icon: LuMail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    company.phone && { icon: LuPhone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    company.address && {
      icon: LuMapPin,
      label: 'Location',
      value: company.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
    },
    { icon: LuFacebook, label: 'Facebook', value: company.name, href: company.facebook },
    { icon: LuClock, label: 'Business hours', value: company.hours },
  ].filter(Boolean)

export const ContactList = ({ dark = false }) => (
  <ul className="space-y-5">
    {contactItems().map(({ icon: Icon, label, value, href }) => {
      const external = href?.startsWith('http')
      const body = (
        <>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              dark ? 'bg-white/10 text-gold-400' : 'bg-brand-50 text-brand-600'
            }`}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className={`block text-xs font-medium tracking-wide uppercase ${dark ? 'text-navy-200' : 'text-navy-500'}`}>
              {label}
            </span>
            <span className={`block font-semibold [overflow-wrap:anywhere] ${dark ? 'text-white' : 'text-navy-900'}`}>{value}</span>
          </span>
        </>
      )
      return (
        <li key={label}>
          {href ? (
            <a
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="flex items-center gap-4 rounded-xl transition hover:opacity-80"
            >
              {body}
            </a>
          ) : (
            <div className="flex items-center gap-4">{body}</div>
          )}
        </li>
      )
    })}
  </ul>
)
