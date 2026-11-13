import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import services, { type Service } from '../data/services'
import { cdn } from '../data/site'
import { EnquiryForm } from './EnquiryForm'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function ServicePage({ service }: { service: Service }) {
  const [serviceId, setServiceId] = useState(service.id)
  const others = services.filter((s) => s.id !== service.id)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="annot pt-10 text-ink-soft">
          <Link to="/" className="hover:text-oxide">
            Home
          </Link>{' '}
          /{' '}
          <Link to="/" hash="services" className="hover:text-oxide">
            Services
          </Link>{' '}
          / <span className="text-ink">{service.code}</span>
        </nav>

        <section className="grid gap-12 pt-10 pb-16 lg:grid-cols-[7fr_5fr]">
          <div>
            <p className="annot rise text-oxide">{service.code}</p>
            <h1
              className="display rise mt-4 text-6xl sm:text-7xl"
              style={{ animationDelay: '80ms' }}
            >
              {service.name}
            </h1>
            <p
              className="rise mt-6 max-w-xl text-xl text-ink-soft"
              style={{ animationDelay: '160ms' }}
            >
              {service.tagline}
            </p>
            <div className="mt-10 max-w-2xl space-y-5 leading-relaxed">
              {service.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              href="#enquiry"
              className="action mt-10"
              onClick={() => setServiceId(service.id)}
            >
              Ask for a fee proposal <span aria-hidden="true">→</span>
            </a>
          </div>

          <aside className="space-y-8">
            {service.image && (
              <img
                src={cdn(service.image.file, 900)}
                alt={service.image.alt}
                loading="eager"
                className="aspect-[4/3] w-full border border-ink object-cover"
              />
            )}
            <div className="border border-ink bg-paper">
              <h2 className="annot border-b border-ink bg-ink px-5 py-3 text-paper">
                You receive
              </h2>
              <ul className="divide-y divide-ink/20">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 px-5 py-3.5 text-sm">
                    <span aria-hidden="true" className="text-oxide">
                      ■
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="annot text-ink-soft">Typical projects</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.typical.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/30 px-3 py-1.5 text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section aria-labelledby="other-heading" className="pb-20">
          <h2 id="other-heading" className="annot text-ink-soft">
            Other services
          </h2>
          <ul className="mt-4 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <li key={s.id} className="bg-paper">
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: s.id }}
                  className="block h-full p-5 transition-colors hover:bg-paper-deep"
                >
                  <span className="annot text-oxide">{s.code}</span>
                  <span className="display mt-2 block text-2xl">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <EnquiryForm serviceId={serviceId} onServiceChange={setServiceId} />
      </main>
      <SiteFooter />
    </>
  )
}
