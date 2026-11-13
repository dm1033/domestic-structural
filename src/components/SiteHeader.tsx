import { Link } from '@tanstack/react-router'
import { site } from '../data/site'
import { BeamMark } from './BeamMark'

export function SiteHeader({ quoteHref = '#enquiry' }: { quoteHref?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-semibold">
          <BeamMark className="h-6 w-6 text-oxide" />
          <span className="tracking-tight">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            hash="services"
            className="hidden hover:text-oxide sm:inline"
          >
            Services
          </Link>
          <Link
            to="/"
            hash="process"
            className="hidden hover:text-oxide sm:inline"
          >
            How it works
          </Link>
          <Link to="/" hash="faq" className="hidden hover:text-oxide md:inline">
            Questions
          </Link>
          <a
            href={quoteHref}
            className="bg-ink px-4 py-2 font-semibold text-paper transition-colors hover:bg-oxide"
          >
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  )
}
