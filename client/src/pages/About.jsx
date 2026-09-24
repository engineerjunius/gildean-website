import React from 'react'
import { LuTarget, LuEye } from 'react-icons/lu'
import { company } from '../data/site'
import BlueprintArt from '../components/BlueprintArt'
import { CtaBand, PageHeader, Reveal, SectionHeading, Values } from '../components/Sections'

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`About ${company.shortName}`}
        text="An engineering services firm focused on accurate design work and dependable printing."
      />

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Engineering support for builders, owners and professionals
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-500">
            <p>
              {company.name} provides structural design, analysis and drafting, together with blueprint plotting and
              everyday printing. Having these under one roof means fewer hand-offs and faster turnaround for your
              project.
            </p>
            <p>
              Whether you need a full set of structural plans, a few copies of a blueprint for site use, or a quick print
              job, we treat every request with the same care for accuracy and detail.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl bg-white p-2 shadow-xl shadow-navy-900/10 ring-1 ring-navy-100">
          <BlueprintArt />
        </Reveal>
      </section>

      <section className="bg-navy-50 py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            {
              icon: LuTarget,
              title: 'Our mission',
              text: 'To deliver engineering and printing services that are accurate, efficient and easy to work with, helping every client move their project forward with confidence.',
            },
            {
              icon: LuEye,
              title: 'Our vision',
              text: 'To be a trusted local partner for engineering design and technical printing, known for quality work and dependable service.',
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1} className="rounded-2xl border border-navy-100 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-navy-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeading eyebrow="Our values" title="What you can expect from us" />
        <div className="mt-14">
          <Values />
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default About
