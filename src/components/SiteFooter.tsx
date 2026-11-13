import { Link } from '@tanstack/react-router'
import services from '../data/services'
import { site } from '../data/site'
import { BeamMark } from './BeamMark'

/** Footer styled as a drawing-sheet title block. */
export function SiteFooter({ quoteHref = '#enquiry' }: { quoteHref?: string }) {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="bg-ink p-8">
          <div className="flex items-center gap-2.5 text-lg font-semibold">
            <BeamMark className="h-6 w-6 text-oxide" />
            {site.name}
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            {site.description}
          </p>
        </div>
        <div className="bg-ink p-8">
          <p className="annot text-paper/50">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: s.id }}
                  className="hover:text-oxide"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between bg-ink p-8">
          <div>
            <p className="annot text-paper/50">Enquiries</p>
            <a
              href={quoteHref}
              className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-oxide"
            >
              Send project details
            </a>
          </div>
          <dl className="annot mt-8 grid grid-cols-2 gap-y-1 text-paper/50">
            <dt>Sheet</dt>
            <dd className="text-paper/80">01 of 01</dd>
            <dt>Rev</dt>
            <dd className="text-paper/80">A</dd>
          </dl>
        </div>
      </div>
    </footer>
  )
}
