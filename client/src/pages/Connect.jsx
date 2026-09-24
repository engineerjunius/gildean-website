import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LuSend, LuCircleCheck } from 'react-icons/lu'
import { company, services } from '../data/site'
import { ContactList, PageHeader, Reveal } from '../components/Sections'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = ({ name, email, message }) => {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Please tell us a bit more (at least 10 characters).'
  return errors
}

const Field = ({ label, error, children, htmlFor, optional }) => (
  <div>
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy-800">
      {label} {optional && <span className="font-normal text-navy-500">(optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
)

const Connect = () => {
  const [params] = useSearchParams()
  const initialService = services.some((s) => s.slug === params.get('service')) ? params.get('service') : ''

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: initialService, message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    const serviceTitle = services.find((s) => s.slug === form.service)?.title || 'General inquiry'
    const subject = `${serviceTitle} — inquiry from ${form.name.trim()}`
    const body = [
      form.message.trim(),
      '',
      '---',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      `Service: ${serviceTitle}`,
    ]
      .filter((line) => line !== '')
      .join('\n')

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: update,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `field ${errors[name] ? 'border-red-400 focus:border-red-500 focus:ring-red-500/15' : ''}`,
  })

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get in touch"
        text="Tell us about your project and we'll get back to you with a quote and timeline."
      />

      <section className="container-page grid grid-cols-1 gap-10 py-24 lg:grid-cols-5">
        <Reveal className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10 lg:col-span-3">
          {sent ? (
            <div className="py-10 text-center">
              <LuCircleCheck className="mx-auto h-14 w-14 text-brand-600" />
              <h2 className="mt-5 text-2xl font-bold text-navy-900">Your email is ready to send</h2>
              <p className="mx-auto mt-3 max-w-md text-navy-500">
                We opened your email app with your message filled in. Just press send. If nothing opened, email us
                directly at{' '}
                <a href={`mailto:${company.email}`} className="font-semibold text-brand-600 hover:underline">
                  {company.email}
                </a>
                .
              </p>
              <button type="button" onClick={() => setSent(false)} className="btn btn-secondary mt-8">
                Back to the form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Send us a message</h2>
                <p className="mt-1 text-sm text-navy-500">Fields marked optional can be left blank.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="Juan Dela Cruz" {...fieldProps('name')} />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone" optional>
                  <input type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" {...fieldProps('phone')} />
                </Field>
                <Field label="Service" htmlFor="service">
                  <select {...fieldProps('service')}>
                    <option value="">General inquiry</option>
                    {services.map(({ slug, title }) => (
                      <option key={slug} value={slug}>
                        {title}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project details" htmlFor="message" error={errors.message}>
                <textarea
                  rows={6}
                  placeholder="Tell us what you need: scope, sizes, quantities, deadline…"
                  {...fieldProps('message')}
                />
              </Field>

              <button type="submit" className="btn btn-primary w-full px-6 sm:w-auto">
                Send message <LuSend className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl bg-navy-900 p-8 sm:p-10 lg:col-span-2">
          <h2 className="text-xl font-bold text-white">Contact details</h2>
          <p className="mt-2 mb-8 text-sm text-navy-200">Prefer to reach out directly? Use any of these.</p>
          <ContactList dark />
        </Reveal>
      </section>
    </>
  )
}

export default Connect
