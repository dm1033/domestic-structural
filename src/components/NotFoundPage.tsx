import { Link } from '@tanstack/react-router'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function NotFoundPage() {
  return (
    <>
      <SiteHeader quoteHref="/#enquiry" />
      <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <p className="annot text-oxide">Error 404 · Sheet missing</p>
        <h1 className="display mt-4 text-6xl">This page isn’t in the set.</h1>
        <p className="mt-6 text-ink-soft">
          The link may be out of date. Try the services list instead.
        </p>
        <Link to="/" hash="services" className="action mt-10">
          Browse services
        </Link>
      </main>
      <SiteFooter quoteHref="/#enquiry" />
    </>
  )
}
