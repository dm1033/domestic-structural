import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import services from '../data/services'
import { cdn, faqs, processSteps } from '../data/site'
import { EnquiryForm } from './EnquiryForm'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function MarketingPage() {
  const [serviceId, setServiceId] = useState(services[0].id)
  const pick = (id: string) => () => setServiceId(id)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-end gap-10 pt-12 pb-20 lg:grid-cols-[6fr_6fr] lg:pt-20">
          <div>
            <p className="annot rise text-oxide">
              Structural engineering for homes &amp; extensions
            </p>
            <h1
              className="display rise mt-6 text-[3.4rem] sm:text-7xl xl:text-[5.6rem]"
              style={{ animationDelay: '80ms' }}
            >
              The sums behind
              <br />
              the wall you’re
              <br />
              <em className="text-oxide">taking out.</em>
            </h1>
            <p
              className="rise mt-8 max-w-lg text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: '160ms' }}
            >
              Beam calculations, extension and foundation design, and planning
              drawings for homeowners and their builders. Clear fixed fees,
              signed calculations, and answers when Building Control calls.
            </p>
            <div
              className="rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: '240ms' }}
            >
              <a href="#enquiry" className="action">
                Request a fee proposal <span aria-hidden="true">→</span>
              </a>
              <a href="#services" className="action-ghost">
                See services
              </a>
            </div>
          </div>

          <figure className="rise relative" style={{ animationDelay: '200ms' }}>
            <div className="relative overflow-hidden border border-ink">
              <img
                src={cdn('hero.png', 1400)}
                srcSet={`${cdn('hero.png', 800)} 800w, ${cdn('hero.png', 1400)} 1400w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Red steel beam installed across a wide opening in a terraced house, with glazed doors to a new rear extension beyond"
                width={1312}
                height={816}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
              />
              {/* drawing annotation over the beam */}
              <div className="pointer-events-none absolute top-[17%] right-[6%] left-[18%] hidden text-paper sm:block">
                <div className="dim draw" style={{ animationDelay: '700ms' }} />
                <p className="annot mt-2 text-center drop-shadow">
                  Clear span · sized to suit
                </p>
              </div>
            </div>
            <figcaption className="annot absolute -bottom-4 left-4 bg-ink px-3 py-2 text-paper">
              Fig. 1 — Rear knock-through, steel on padstones
            </figcaption>
          </figure>
        </section>

        {/* Quick facts strip */}
        <section
          aria-label="What you get"
          className="grid gap-px border-y border-ink bg-ink/20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ['Fixed fee', 'Quoted up front, before any work starts'],
            [
              'Signed calcs',
              'Ready for Building Control or approved inspectors',
            ],
            ['Builder-ready', 'Sketches your contractor can price from'],
            ['Plain English', 'No jargon in letters or reports'],
          ].map(([title, body], i) => (
            <div key={title} className="bg-paper p-6">
              <p className="annot text-oxide">0{i + 1}</p>
              <p className="mt-3 font-semibold">{title}</p>
              <p className="mt-1 text-sm text-ink-soft">{body}</p>
            </div>
          ))}
        </section>

        {/* Services register */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="scroll-mt-20 py-24"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="services-heading" className="display text-5xl sm:text-6xl">
              Services
            </h2>
            <p className="annot max-w-xs text-ink-soft">
              Drawing register — select a service for scope and deliverables
            </p>
          </div>
          <ol className="mt-12 border-t border-ink">
            {services.map((s) => (
              <li key={s.id} className="group border-b border-ink/25">
                <div className="grid items-baseline gap-x-8 gap-y-3 py-7 transition-colors group-hover:bg-paper-deep/70 sm:px-4 md:grid-cols-[6rem_1fr_1.2fr_auto]">
                  <span className="annot text-oxide">{s.code}</span>
                  <h3 className="display text-3xl sm:text-4xl">
                    <Link
                      to="/services/$serviceId"
                      params={{ serviceId: s.id }}
                      className="decoration-oxide decoration-2 underline-offset-8 hover:underline"
                    >
                      {s.name}
                    </Link>
                  </h3>
                  <p className="text-ink-soft">{s.summary}</p>
                  <a
                    href="#enquiry"
                    onClick={pick(s.id)}
                    className="annot whitespace-nowrap text-ink underline-offset-4 hover:text-oxide hover:underline"
                  >
                    Enquire →
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Feature split: extensions + foundations */}
        <section
          aria-label="Extensions and foundations"
          className="grid gap-10 lg:grid-cols-12"
        >
          <article className="lg:col-span-7">
            <img
              src={cdn('extension.png', 1200)}
              alt="Single-storey brick extension under construction at the back of a semi-detached house, with roof joists and scaffolding in place"
              width={1200}
              height={896}
              loading="lazy"
              className="aspect-[4/3] w-full border border-ink object-cover"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr]">
              <p className="annot text-oxide">S-02</p>
              <div>
                <h3 className="display text-4xl">
                  Extensions, start to finish
                </h3>
                <p className="mt-3 max-w-xl text-ink-soft">
                  Planning drawings first, then the structure: roof joists,
                  lintels, the steel that opens the old back wall, and the
                  foundations under it all. One set of drawings, one point of
                  contact.
                </p>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: 'extensions' }}
                  className="mt-4 inline-block font-semibold underline decoration-oxide decoration-2 underline-offset-4"
                >
                  Extension design
                </Link>
              </div>
            </div>
          </article>
          <article className="lg:col-span-5 lg:mt-40">
            <img
              src={cdn('foundations.png', 900)}
              alt="Concrete being poured into a reinforced strip foundation trench beside a brick house"
              width={1200}
              height={896}
              loading="lazy"
              className="aspect-[4/5] w-full border border-ink object-cover"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr]">
              <p className="annot text-oxide">S-03</p>
              <div>
                <h3 className="display text-4xl">Ground you can trust</h3>
                <p className="mt-3 text-ink-soft">
                  Clay, trees and drains decide how deep you dig. We design
                  foundations for the ground you actually have.
                </p>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: 'foundations' }}
                  className="mt-4 inline-block font-semibold underline decoration-oxide decoration-2 underline-offset-4"
                >
                  Foundation design
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Planning callout */}
        <section className="mt-24 grid gap-8 bg-ink p-8 text-paper sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="annot text-oxide">S-04 · Planning permission</p>
            <h2 className="display mt-4 text-5xl">
              Planning first.
              <br />
              <em className="text-paper/60">Then Building Regs.</em>
            </h2>
          </div>
          <div>
            <p className="text-paper/80">
              Planning permission decides whether you can build it. Building
              Regulations decide how. We prepare the measured survey, existing
              and proposed drawings and the application, then carry the same
              drawings through to structural calculations.
            </p>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'planning-drawings' }}
              className="mt-6 inline-flex items-center gap-3 border border-paper px-6 py-3.5 font-semibold transition-colors hover:bg-paper hover:text-ink"
            >
              Planning drawings <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="scroll-mt-20 py-24"
        >
          <h2 id="process-heading" className="display text-5xl sm:text-6xl">
            How it works
          </h2>
          <ol className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="bg-paper p-7">
                <span className="display text-6xl text-oxide">{i + 1}</span>
                <h3 className="mt-6 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="grid scroll-mt-20 gap-10 pb-24 lg:grid-cols-[4fr_8fr]"
        >
          <div>
            <h2 id="faq-heading" className="display text-5xl sm:text-6xl">
              Common questions
            </h2>
            <p className="mt-4 text-ink-soft">
              Something not covered here? Ask in your enquiry.
            </p>
          </div>
          <div className="border-t border-ink">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-ink/25">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="annot mt-1 shrink-0 text-oxide transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <EnquiryForm serviceId={serviceId} onServiceChange={setServiceId} />
      </main>
      <SiteFooter />
    </>
  )
}
